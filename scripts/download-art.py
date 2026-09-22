from pathlib import Path
import urllib.request, json, concurrent.futures
ROOT=Path(__file__).resolve().parents[1]
base='https://mir-s3-cdn-cf.behance.net/project_modules/'
sources={
'lrz':['fs_webp/6aa8a7228162769.684e00eab9549.png','fs_webp/9b9c80228162769.684e0772c4855.png','max_632_webp/b69493228162769.684e0e1d9c230.png','fs_webp/f33d2c228162769.684f04c8c5fe4.png','fs_webp/9e2f1f228162769.684f04c8c5a9c.png'],
'umidifica':['max_1200_webp/21faf0139211061.622b63e3958d1.jpg','max_1200_webp/73550a139211061.622b63e395318.jpg','max_1200_webp/c0c221139211061.622b6b0469cd7.jpg','max_1200_webp/a53ca3139211061.622b63e3960a2.png'],
'codders':['1400_webp/d91adc133800077.63e254b173abc.png'],
'distric99':['1400_webp/fb65e5239355943.6927517285683.png','1400_webp/d169b0239355943.6927517283fc1.png','1400_webp/c0fda7239355943.692751728469f.png','1400_webp/7e5594239355943.6927517283ac9.png','1400_webp/ac8aea239355943.6927517284b19.png','1400_webp/fb64e2239355943.6927517284f98.png'],
'social2024':['max_632_webp/45c172213268217.6743f6d69f351.png','fs_webp/bdfec6213268217.6743f6d6a06bd.png','fs_webp/78490e213268217.6743f6d69ffdf.png','fs_webp/69922f213268217.6743f767eae48.png'],
'social':['fs_webp/f877e4166232643.6505b950efb8b.png'],
'logos':['fs_webp/7d4a6e185950411.656d1c5d95f21.png']}
out=ROOT/'public/assets';out.mkdir(parents=True,exist_ok=True)
def fetch(task):
 key,i,source=task
 dest=out/f'{key}-{i}.webp'
 if not dest.exists():
  req=urllib.request.Request(base+source,headers={'User-Agent':'Mozilla/5.0'})
  dest.write_bytes(urllib.request.urlopen(req,timeout=60).read())
 return str(dest.name)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
 for result in pool.map(fetch,[(k,i,s) for k,v in sources.items() for i,s in enumerate(v)]):print(result)
(ROOT/'src/art-sources.json').write_text(json.dumps({k:[f'/assets/{k}-{i}.webp' for i in range(len(v))] for k,v in sources.items()},indent=2))
