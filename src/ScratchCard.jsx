import React, {useEffect, useRef, useState} from 'react';
import {DiscordLogo, ArrowUpRight} from '@phosphor-icons/react';

export default function ScratchCard({hint, label, href}) {
  const canvas = useRef(null);
  const link = useRef(null);
  const strokes = useRef([]);
  const active = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [touched, setTouched] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(canvas.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (revealed) return;
    const el = canvas.current;
    const draw = () => {
      const {width, height} = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = Math.max(1, Math.round(width * dpr));
      el.height = Math.max(1, Math.round(height * dpr));
      const ctx = el.getContext('2d');
      // Pixel-level silver grain remains part of the erasable coating.
      const grain = ctx.createImageData(el.width, el.height);
      for (let i = 0; i < grain.data.length; i += 4) {
        const x = (i / 4 % el.width) / el.width;
        const tone = 132 + Math.sin(x * Math.PI) * 34 + (Math.random() - .5) * 92;
        grain.data[i] = tone;
        grain.data[i + 1] = tone + 3;
        grain.data[i + 2] = tone + 6;
        grain.data[i + 3] = 255;
      }
      ctx.putImageData(grain, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.fillStyle = '#252932';
      ctx.font = '700 12px Inter, Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(hint.toUpperCase(), width / 2, height / 2);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 40;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (const stroke of strokes.current) {
        ctx.beginPath();
        ctx.moveTo(stroke[0].x * width, stroke[0].y * height);
        stroke.forEach(p => ctx.lineTo(p.x * width, p.y * height));
        ctx.stroke();
      }
    };
    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(el);
    return () => observer.disconnect();
  }, [hint, revealed]);

  function scratch(e) {
    if (revealed || active.current !== e.pointerId) return;
    const el = canvas.current;
    const rect = el.getBoundingClientRect();
    const point = {x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height};
    const stroke = strokes.current.at(-1);
    const previous = stroke.at(-1) || point;
    stroke.push(point);
    const ctx = el.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 40;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(previous.x * rect.width, previous.y * rect.height);
    ctx.lineTo(point.x * rect.width + .01, point.y * rect.height);
    ctx.stroke();
    const pixels = ctx.getImageData(0, 0, el.width, el.height).data;
    let cleared = 0, total = 0;
    for (let i = 3; i < pixels.length; i += 64) {total++; if (pixels[i] < 40) cleared++;}
    if (cleared / total > .42) setRevealed(true);
  }

  return <div className={`scratch-price ${revealed ? 'is-revealed' : ''}`}>
    <a ref={link} href={href} target='_blank' rel='noreferrer' className='scratch-result' tabIndex={revealed ? 0 : -1} aria-hidden={!revealed}>
      <DiscordLogo weight='fill' size={22}/><span>{label}</span><ArrowUpRight size={17}/>
    </a>
    <canvas ref={canvas} role='button' tabIndex={revealed ? -1 : 0} aria-hidden={revealed} aria-label={hint}
      onPointerDown={e => {active.current = e.pointerId; strokes.current.push([]); setTouched(true); e.currentTarget.setPointerCapture(e.pointerId); scratch(e);}}
      onPointerMove={scratch} onPointerUp={() => {active.current = null;}} onPointerCancel={() => {active.current = null;}}
      onKeyDown={e => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); setRevealed(true); setTouched(true); requestAnimationFrame(() => link.current?.focus());}}}/>
    {!touched && !revealed && <img className={`scratch-coin ${visible ? 'is-visible' : ''}`} src='/assets/scratch-coin.png' alt='' aria-hidden='true'/>}
  </div>;
}
