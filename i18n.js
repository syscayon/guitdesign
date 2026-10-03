// Idiomas: o HTML é escrito em português; em EN e ES os textos são trocados ao carregar.
// Cada chave é o texto em português (espaços normalizados) → [inglês, espanhol].
// Ao adicionar texto novo no HTML ou no JS, adicione a tradução aqui (o QA acusa o que faltar).
const T = {
  // Comum
  'Guit Design, início': ['Guit Design, home', 'Guit Design, inicio'],
  'Principal': ['Main', 'Principal'],
  'Menu': ['Menu', 'Menú'],
  'Conversar': ["Let's talk", 'Hablemos'],
  'Idioma': ['Language', 'Idioma'],
  'Ver case': ['View case', 'Ver caso'],
  'Trabalhos': ['Work', 'Trabajos'],
  'Social media': ['Social media', 'Redes sociales'],
  'Sobre': ['About', 'Acerca de'],
  'Estúdio': ['Studio', 'Estudio'],
  'Projetos': ['Projects', 'Proyectos'],
  'Galeria': ['Gallery', 'Galería'],
  'Planos': ['Plans', 'Planes'],
  'Contato': ['Contact', 'Contacto'],
  'Redes': ['Social', 'Redes'],
  'Legal': ['Legal', 'Legal'],
  'Termos de uso': ['Terms of use', 'Términos de uso'],
  'Privacidade': ['Privacy', 'Privacidad'],
  'Guit Design. Todos os direitos reservados.': ['Guit Design. All rights reserved.', 'Guit Design. Todos los derechos reservados.'],
  'Voltar ao topo': ['Back to top', 'Volver arriba'],
  'Conversar no Discord': ['Chat on Discord', 'Hablar por Discord'],
  'Identidade visual': ['Visual identity', 'Identidad visual'],
  'Identidade visual para GTA RP': ['Visual identity for GTA RP', 'Identidad visual para GTA RP'],
  'Abrir case District99': ['Open District99 case', 'Abrir caso District99'],
  'Logotipo': ['Logo', 'Logotipo'],
  'Logotipos': ['Logos', 'Logotipos'],

  // Case e lightbox
  'Fechar case': ['Close case', 'Cerrar caso'],
  'Fechar': ['Close', 'Cerrar'],
  'Ver no Behance': ['View on Behance', 'Ver en Behance'],
  'Imagem ampliada': ['Enlarged image', 'Imagen ampliada'],
  'Anterior': ['Previous', 'Anterior'],
  'Imagem anterior': ['Previous image', 'Imagen anterior'],
  'Próxima': ['Next', 'Siguiente'],
  'Próxima imagem': ['Next image', 'Imagen siguiente'],
  'Ampliar': ['Enlarge', 'Ampliar'],
  'imagem {n} de {total}': ['image {n} of {total}', 'imagen {n} de {total}'],
  'Performance, tecnologia e uma identidade com movimento.': ['Performance, technology and an identity in motion.', 'Rendimiento, tecnología y una identidad en movimiento.'],
  'Uma identidade leve, natural e reconhecível.': ['A light, natural and recognizable identity.', 'Una identidad ligera, natural y reconocible.'],
  'Uma marca e suas aplicações, do símbolo aos detalhes.': ['A brand and its applications, from symbol to detail.', 'Una marca y sus aplicaciones, del símbolo a los detalles.'],
  'Uma identidade vibrante para um universo de histórias.': ['A vibrant identity for a universe of stories.', 'Una identidad vibrante para un universo de historias.'],
  'Identidade visual: Guilherme Travaglini / Guit Design. Logotipo: Claus Veronesi / Design Ideal.': ['Visual identity: Guilherme Travaglini / Guit Design. Logo: Claus Veronesi / Design Ideal.', 'Identidad visual: Guilherme Travaglini / Guit Design. Logotipo: Claus Veronesi / Design Ideal.'],
  'Projeto em colaboração: Guit Design, Mateus Rodri e Mateus Rodriguez. Créditos completos no Behance.': ['A collaboration by Guit Design, Mateus Rodri and Mateus Rodriguez. Full credits on Behance.', 'Proyecto en colaboración: Guit Design, Mateus Rodri y Mateus Rodriguez. Créditos completos en Behance.'],

  // Início
  'Guit Design — Design gráfico': ['Guit Design — Graphic design', 'Guit Design — Diseño gráfico'],
  'Guit Design: estúdio de design gráfico de Guilherme Travaglini. Identidade visual, branding e social media.': ['Guit Design: graphic design studio by Guilherme Travaglini. Visual identity, branding and social media.', 'Guit Design: estudio de diseño gráfico de Guilherme Travaglini. Identidad visual, branding y redes sociales.'],
  'Pular para os trabalhos': ['Skip to the work', 'Saltar a los trabajos'],
  'Design com': ['Design with', 'Diseño con'],
  'presença': ['presence', 'presencia'],
  'autoridade': ['authority', 'autoridad'],
  'criatividade': ['creativity', 'creatividad'],
  'impacto': ['impact', 'impacto'],
  'personalidade': ['personality', 'personalidad'],
  'Estúdio de design gráfico de Guilherme Travaglini. Identidades visuais, branding e social media para marcas que querem ser lembradas.': ['Graphic design studio by Guilherme Travaglini. Visual identities, branding and social media for brands that want to be remembered.', 'Estudio de diseño gráfico de Guilherme Travaglini. Identidades visuales, branding y redes sociales para marcas que quieren ser recordadas.'],
  'Ver trabalhos': ['See the work', 'Ver trabajos'],
  'Quatro identidades, cada uma com sua própria voz. Clique para abrir o case.': ['Four identities, each with its own voice. Click to open the case.', 'Cuatro identidades, cada una con su propia voz. Haz clic para abrir el caso.'],
  'Abrir case LRZ Bikeshop': ['Open LRZ Bikeshop case', 'Abrir caso LRZ Bikeshop'],
  'Abrir case Umidifica': ['Open Umidifica case', 'Abrir caso Umidifica'],
  'Abrir case Codders': ['Open Codders case', 'Abrir caso Codders'],
  'Identidade visual LRZ Bikeshop': ['LRZ Bikeshop visual identity', 'Identidad visual LRZ Bikeshop'],
  'Identidade visual Umidifica': ['Umidifica visual identity', 'Identidad visual Umidifica'],
  'Identidade visual District99': ['District99 visual identity', 'Identidad visual District99'],
  'Identidade visual Codders': ['Codders visual identity', 'Identidad visual Codders'],
  'Mais projetos, apresentações completas e processos estão no Behance.': ['More projects, full presentations and process are on Behance.', 'Más proyectos, presentaciones completas y procesos en Behance.'],
  'Abrir Behance': ['Open Behance', 'Abrir Behance'],
  'Passe o cursor para ver. Clique para ampliar.': ['Hover to preview. Click to enlarge.', 'Pasa el cursor para ver. Haz clic para ampliar.'],
  'Peças para Nuuvmed, Tocatambor, Sabor do Norte e iSafeCell.': ['Pieces for Nuuvmed, Tocatambor, Sabor do Norte and iSafeCell.', 'Piezas para Nuuvmed, Tocatambor, Sabor do Norte y iSafeCell.'],
  'Ampliar Nuuvmed, automação': ['Enlarge Nuuvmed, automation', 'Ampliar Nuuvmed, automatización'],
  'Ampliar Nuuvmed, boas-vindas': ['Enlarge Nuuvmed, welcome', 'Ampliar Nuuvmed, bienvenida'],
  'Ampliar Tocatambor, sarau': ['Enlarge Tocatambor, soirée', 'Ampliar Tocatambor, velada'],
  'Ampliar Tocatambor, matrículas': ['Enlarge Tocatambor, enrollment', 'Ampliar Tocatambor, inscripciones'],
  'Ampliar Sabor do Norte, Milky Moo': ['Enlarge Sabor do Norte, Milky Moo', 'Ampliar Sabor do Norte, Milky Moo'],
  'Ampliar Sabor do Norte, novos sabores': ['Enlarge Sabor do Norte, new flavors', 'Ampliar Sabor do Norte, nuevos sabores'],
  'Ampliar iSafeCell, primeiro iPhone': ['Enlarge iSafeCell, first iPhone', 'Ampliar iSafeCell, primer iPhone'],
  'Ampliar iSafeCell, modelos de iPhone': ['Enlarge iSafeCell, iPhone models', 'Ampliar iSafeCell, modelos de iPhone'],
  'Uma marca forte não pede atenção. Ela ocupa o espaço com intenção: no símbolo, na cor, no post de terça-feira e em cada detalhe que alguém nem percebe que percebeu.': ["A strong brand doesn't ask for attention. It takes up space with intent: in the symbol, in the color, in Tuesday's post and in every detail people notice without noticing.", 'Una marca fuerte no pide atención. Ocupa el espacio con intención: en el símbolo, en el color, en el post del martes y en cada detalle que alguien nota sin darse cuenta.'],
  'Logotipo, símbolo, paleta, tipografia e as aplicações que fazem tudo isso funcionar junto.': ['Logo, symbol, palette, typography and the applications that make it all work together.', 'Logotipo, símbolo, paleta, tipografía y las aplicaciones que hacen que todo funcione en conjunto.'],
  'Branding': ['Branding', 'Branding'],
  'Posicionamento visual, tom e um sistema que se mantém reconhecível em qualquer meio.': ['Visual positioning, tone and a system that stays recognizable in any medium.', 'Posicionamiento visual, tono y un sistema que se mantiene reconocible en cualquier medio.'],
  'Posts, stories e campanhas com consistência de marca e espaço para ousar.': ['Posts, stories and campaigns with brand consistency and room to be bold.', 'Posts, stories y campañas con coherencia de marca y espacio para arriesgar.'],
  'Games e FiveM': ['Games and FiveM', 'Juegos y FiveM'],
  'Identidades, logos animados e peças para servidores e comunidades.': ['Identities, animated logos and pieces for servers and communities.', 'Identidades, logos animados y piezas para servidores y comunidades.'],
  'Ver trabalhos de FiveM': ['See FiveM work', 'Ver trabajos de FiveM'],
  'Vamos criar algo seu?': ['Shall we create something yours?', '¿Creamos algo tuyo?'],
  'Conte sua ideia no Discord. Respondo com prazos, formato e próximos passos.': ['Tell me your idea on Discord. I reply with timelines, format and next steps.', 'Cuéntame tu idea en Discord. Respondo con plazos, formato y próximos pasos.'],
  'Abrir o Discord': ['Open Discord', 'Abrir Discord'],

  // FiveM
  'Design para FiveM — Guit Design': ['FiveM design — Guit Design', 'Diseño para FiveM — Guit Design'],
  'Logotipos, banners animados, loadscreens e ícones de loja VIP para servidores de GTA RP no FiveM.': ['Logos, animated banners, loadscreens and VIP store icons for GTA RP servers on FiveM.', 'Logotipos, banners animados, pantallas de carga e íconos de tienda VIP para servidores de GTA RP en FiveM.'],
  'Pular para os projetos': ['Skip to projects', 'Saltar a los proyectos'],
  'Dica': ['Tip', 'Consejo'],
  'Um logo animado na tela de conexão é a primeira coisa que o jogador vê do seu servidor.': ['An animated logo on the connection screen is the first thing players see of your server.', 'Un logo animado en la pantalla de conexión es lo primero que el jugador ve de tu servidor.'],
  'Carregando a cidade': ['Loading the city', 'Cargando la ciudad'],
  'Radar das seções': ['Section radar', 'Radar de secciones'],
  'Ir para Projetos': ['Go to Projects', 'Ir a Proyectos'],
  'Ir para Galeria': ['Go to Gallery', 'Ir a Galería'],
  'Ir para Planos': ['Go to Plans', 'Ir a Planes'],
  'Ir para Contato': ['Go to Contact', 'Ir a Contacto'],
  'Design para servidores de GTA RP': ['Design for GTA RP servers', 'Diseño para servidores de GTA RP'],
  'Sua cidade. Uma marca inesquecível.': ['Your city. An unforgettable brand.', 'Tu ciudad. Una marca inolvidable.'],
  'Sua cidade.': ['Your city.', 'Tu ciudad.'],
  'Uma marca': ['An unforgettable', 'Una marca'],
  'inesquecível.': ['brand.', 'inolvidable.'],
  'Logotipos, banners animados, loadscreens e ícones de loja VIP para o seu servidor de FiveM.': ['Logos, animated banners, loadscreens and VIP store icons for your FiveM server.', 'Logotipos, banners animados, pantallas de carga e íconos de tienda VIP para tu servidor de FiveM.'],
  'Ver planos': ['See plans', 'Ver planes'],
  'Identidade visual completa para a cidade District99, em colaboração com Mateus Rodri e Mateus Rodriguez.': ['Complete visual identity for the city of District99, in collaboration with Mateus Rodri and Mateus Rodriguez.', 'Identidad visual completa para la ciudad District99, en colaboración con Mateus Rodri y Mateus Rodriguez.'],
  'Abrir case District99, versões do logotipo': ['Open District99 case, logo versions', 'Abrir caso District99, versiones del logotipo'],
  'Abrir case District99, símbolo 99': ['Open District99 case, 99 symbol', 'Abrir caso District99, símbolo 99'],
  'Abrir case': ['Open case', 'Abrir caso'],
  'Use as abas ou as setas do teclado. Clique em uma peça para ampliar.': ['Use the tabs or arrow keys. Click a piece to enlarge it.', 'Usa las pestañas o las flechas del teclado. Haz clic en una pieza para ampliarla.'],
  'Tipo de trabalho': ['Type of work', 'Tipo de trabajo'],
  'Logotipos animados': ['Animated logos', 'Logotipos animados'],
  'Ícones loja VIP': ['VIP store icons', 'Íconos tienda VIP'],
  'FiveZ Brasil · Gameplay antecipada': ['FiveZ Brasil · Early gameplay', 'FiveZ Brasil · Gameplay anticipado'],
  'FiveZ Brasil · Evento de Halloween': ['FiveZ Brasil · Halloween event', 'FiveZ Brasil · Evento de Halloween'],
  'FiveZ Brasil · Encerramento de temporada': ['FiveZ Brasil · Season finale', 'FiveZ Brasil · Final de temporada'],
  'Ampliar FiveZ Brasil, gameplay antecipada': ['Enlarge FiveZ Brasil, early gameplay', 'Ampliar FiveZ Brasil, gameplay anticipado'],
  'Ampliar FiveZ Brasil, evento de Halloween': ['Enlarge FiveZ Brasil, Halloween event', 'Ampliar FiveZ Brasil, evento de Halloween'],
  'Ampliar FiveZ Brasil, encerramento de temporada': ['Enlarge FiveZ Brasil, season finale', 'Ampliar FiveZ Brasil, final de temporada'],
  'Ampliar Baixada RJ': ['Enlarge Baixada RJ', 'Ampliar Baixada RJ'],
  'Ampliar FOX West': ['Enlarge FOX West', 'Ampliar FOX West'],
  'Ampliar Revolution RP': ['Enlarge Revolution RP', 'Ampliar Revolution RP'],
  'Ampliar Cidadela Customs': ['Enlarge Cidadela Customs', 'Ampliar Cidadela Customs'],
  'Ver coletânea no Behance': ['View collection on Behance', 'Ver colección en Behance'],
  'Cidade Brava · Logo animado': ['Cidade Brava · Animated logo', 'Cidade Brava · Logo animado'],
  'Foco · Logo animado': ['Foco · Animated logo', 'Foco · Logo animado'],
  'Just Survive · Logo animado': ['Just Survive · Animated logo', 'Just Survive · Logo animado'],
  'Ampliar Cidade Brava, logo animado': ['Enlarge Cidade Brava, animated logo', 'Ampliar Cidade Brava, logo animado'],
  'Ampliar Foco, logo animado': ['Enlarge Foco, animated logo', 'Ampliar Foco, logo animado'],
  'Ampliar Just Survive, logo animado': ['Enlarge Just Survive, animated logo', 'Ampliar Just Survive, logo animado'],
  'FiveZ Brasil · Acesso beta padrão': ['FiveZ Brasil · Standard beta access', 'FiveZ Brasil · Acceso beta estándar'],
  'FiveZ Brasil · Acesso beta farmador': ['FiveZ Brasil · Farmer beta access', 'FiveZ Brasil · Acceso beta farmer'],
  'Riverside · Personagem extra': ['Riverside · Extra character', 'Riverside · Personaje extra'],
  'Riverside · Acesso antecipado': ['Riverside · Early access', 'Riverside · Acceso anticipado'],
  'Exodus · Redefinir aparência': ['Exodus · Reset appearance', 'Exodus · Restablecer apariencia'],
  'Exodus · Espaço extra de personagem': ['Exodus · Extra character slot', 'Exodus · Espacio extra de personaje'],
  'Ampliar FiveZ Brasil, acesso beta padrão': ['Enlarge FiveZ Brasil, standard beta access', 'Ampliar FiveZ Brasil, acceso beta estándar'],
  'Ampliar FiveZ Brasil, acesso beta farmador': ['Enlarge FiveZ Brasil, farmer beta access', 'Ampliar FiveZ Brasil, acceso beta farmer'],
  'Ampliar Riverside, personagem extra': ['Enlarge Riverside, extra character', 'Ampliar Riverside, personaje extra'],
  'Ampliar Riverside, acesso antecipado': ['Enlarge Riverside, early access', 'Ampliar Riverside, acceso anticipado'],
  'Ampliar Exodus, redefinir aparência': ['Enlarge Exodus, reset appearance', 'Ampliar Exodus, restablecer apariencia'],
  'Ampliar Exodus, espaço extra de personagem': ['Enlarge Exodus, extra character slot', 'Ampliar Exodus, espacio extra de personaje'],
  'Os três incluem logo animado em GIF e dois banners animados diferentes. Raspe o cartão para ver o preço.': ['All three include an animated GIF logo and two different animated banners. Scratch the card to see the price.', 'Los tres incluyen logo animado en GIF y dos banners animados diferentes. Raspa la tarjeta para ver el precio.'],
  'Nível 1 de 3': ['Level 1 of 3', 'Nivel 1 de 3'],
  'Nível 2 de 3': ['Level 2 of 3', 'Nivel 2 de 3'],
  'Nível 3 de 3': ['Level 3 of 3', 'Nivel 3 de 3'],
  'Preço no Discord': ['Price on Discord', 'Precio en Discord'],
  'Raspe para revelar': ['Scratch to reveal', 'Raspa para revelar'],
  'Logo animado em GIF': ['Animated GIF logo', 'Logo animado en GIF'],
  'Banner de conectando animado': ['Animated connecting banner', 'Banner de conexión animado'],
  'Banner detail animado': ['Animated detail banner', 'Banner detail animado'],
  'Loadscreen animada em MP4': ['Animated MP4 loadscreen', 'Pantalla de carga animada en MP4'],
  'Topo do Discord animado': ['Animated Discord header', 'Cabecera de Discord animada'],
  '15 peças para loja VIP': ['15 VIP store pieces', '15 piezas para tienda VIP'],
  'Quero o Essentials': ['I want Essentials', 'Quiero el Essentials'],
  'Quero o Signature': ['I want Signature', 'Quiero el Signature'],
  'Quero o Elysium': ['I want Elysium', 'Quiero el Elysium'],
  'Loadscreen: MP4, 1920 × 1080, cerca de 30 segundos.': ['Loadscreen: MP4, 1920 × 1080, about 30 seconds.', 'Pantalla de carga: MP4, 1920 × 1080, unos 30 segundos.'],
  'Adicional opcional de banners Mastodon': ['Optional Mastodon banners add-on', 'Adicional opcional de banners Mastodon'],
  'Adicional opcional': ['Optional add-on', 'Adicional opcional'],
  'Banners Mastodon': ['Mastodon banners', 'Banners Mastodon'],
  '3 banners do perfil do servidor.': ['3 server profile banners.', '3 banners para el perfil del servidor.'],
  'Quero adicionar': ['Add it', 'Quiero añadirlo'],
  'Nova missão disponível': ['New mission available', 'Nueva misión disponible'],
  'Sua cidade. Sua identidade.': ['Your city. Your identity.', 'Tu ciudad. Tu identidad.'],
  'Sua identidade.': ['Your identity.', 'Tu identidad.'],
  'Conte como é o seu servidor no Discord. Respondo com prazos, formato e próximos passos.': ['Tell me about your server on Discord. I reply with timelines, format and next steps.', 'Cuéntame cómo es tu servidor en Discord. Respondo con plazos, formato y próximos pasos.'],
  'Aceitar a missão': ['Accept the mission', 'Aceptar la misión'],
  'Conhecer o estúdio': ['Meet the studio', 'Conocer el estudio'],

  // Termos
  'Termos de uso — Guit Design': ['Terms of use — Guit Design', 'Términos de uso — Guit Design'],
  'Termos de uso e política de privacidade da Guit Design.': ['Guit Design terms of use and privacy policy.', 'Términos de uso y política de privacidad de Guit Design.'],
  'Pular para o conteúdo': ['Skip to content', 'Saltar al contenido'],
  'Última atualização: 3 de outubro de 2026. Valem para este site e para os serviços contratados com a Guit Design.': ['Last updated: October 3, 2026. They apply to this site and to services hired from Guit Design.', 'Última actualización: 3 de octubre de 2026. Se aplican a este sitio y a los servicios contratados con Guit Design.'],
  'Seções dos termos': ['Terms sections', 'Secciones de los términos'],
  'Serviços': ['Services', 'Servicios'],
  'Orçamento e contratação': ['Quotes and hiring', 'Presupuesto y contratación'],
  'Pagamento': ['Payment', 'Pago'],
  'Prazos e revisões': ['Timelines and revisions', 'Plazos y revisiones'],
  'Aprovação e entrega': ['Approval and delivery', 'Aprobación y entrega'],
  'Direitos autorais e uso': ['Copyright and usage', 'Derechos de autor y uso'],
  'Uso em portfólio': ['Portfolio use', 'Uso en portafolio'],
  'Cancelamento': ['Cancellation', 'Cancelación'],
  'Conteúdo deste site': ['Content of this site', 'Contenido de este sitio'],
  'Alterações e contato': ['Changes and contact', 'Cambios y contacto'],
  'A Guit Design, estúdio de design gráfico de Guilherme Travaglini, cria identidades visuais, projetos de branding, peças para social media e materiais para games e servidores de FiveM. O escopo de cada trabalho é definido individualmente na proposta enviada ao cliente.': ['Guit Design, the graphic design studio of Guilherme Travaglini, creates visual identities, branding projects, social media pieces and materials for games and FiveM servers. The scope of each job is defined individually in the proposal sent to the client.', 'Guit Design, estudio de diseño gráfico de Guilherme Travaglini, crea identidades visuales, proyectos de branding, piezas para redes sociales y materiales para juegos y servidores de FiveM. El alcance de cada trabajo se define de forma individual en la propuesta enviada al cliente.'],
  'Os pedidos são feitos pelo Discord. Depois de entender a necessidade, envio uma proposta com escopo, entregáveis, prazo, número de revisões e valor. O trabalho começa quando o cliente aprova a proposta e realiza o pagamento inicial combinado.': ['Requests are made through Discord. Once I understand the need, I send a proposal with scope, deliverables, timeline, number of revisions and price. Work begins when the client approves the proposal and makes the agreed initial payment.', 'Los pedidos se hacen por Discord. Después de entender la necesidad, envío una propuesta con alcance, entregables, plazo, número de revisiones y precio. El trabajo empieza cuando el cliente aprueba la propuesta y realiza el pago inicial acordado.'],
  'As condições de pagamento (valor de entrada, parcelas e formas aceitas) constam na proposta. Os arquivos finais são liberados após a quitação integral do valor acordado.': ['Payment terms (down payment, installments and accepted methods) are stated in the proposal. Final files are released once the agreed amount has been paid in full.', 'Las condiciones de pago (anticipo, cuotas y formas aceptadas) constan en la propuesta. Los archivos finales se entregan tras el pago total del monto acordado.'],
  'O prazo começa a contar a partir do pagamento inicial e do recebimento das informações necessárias, como briefing, textos e referências. Atrasos no envio de materiais ou na aprovação de etapas pelo cliente adiam a entrega na mesma proporção.': ["The timeline starts once the initial payment and the necessary information, such as the briefing, copy and references, have been received. Delays in sending materials or approving stages on the client's side push the delivery back by the same amount.", 'El plazo empieza a contar desde el pago inicial y la recepción de la información necesaria, como briefing, textos y referencias. Los retrasos en el envío de materiales o en la aprobación de etapas por parte del cliente aplazan la entrega en la misma proporción.'],
  'Cada proposta inclui um número definido de rodadas de revisão. Pedidos que mudam o escopo original, ou revisões além das incluídas, são orçados à parte.': ['Each proposal includes a set number of revision rounds. Requests that change the original scope, or revisions beyond those included, are quoted separately.', 'Cada propuesta incluye un número definido de rondas de revisión. Los pedidos que cambian el alcance original, o las revisiones adicionales a las incluidas, se presupuestan aparte.'],
  'Ao aprovar a versão final, o cliente confirma que conferiu textos, dados e grafias. Os arquivos são entregues nos formatos combinados. Recomendo guardar uma cópia, pois não há garantia de armazenamento dos arquivos depois da entrega.': ['By approving the final version, the client confirms they have checked all copy, data and spelling. Files are delivered in the agreed formats. I recommend keeping a copy, as storage of files after delivery is not guaranteed.', 'Al aprobar la versión final, el cliente confirma que revisó textos, datos y ortografía. Los archivos se entregan en los formatos acordados. Recomiendo guardar una copia, ya que no se garantiza el almacenamiento de los archivos después de la entrega.'],
  'Após o pagamento integral, o cliente recebe o direito de uso da arte final para as finalidades descritas na proposta. Esboços, alternativas não escolhidas e arquivos de trabalho continuam pertencendo à Guit Design, salvo acordo diferente por escrito.': ['Once paid in full, the client receives the right to use the final artwork for the purposes described in the proposal. Sketches, unchosen alternatives and working files remain the property of Guit Design, unless otherwise agreed in writing.', 'Tras el pago total, el cliente recibe el derecho de uso del arte final para los fines descritos en la propuesta. Los bocetos, las alternativas no elegidas y los archivos de trabajo siguen perteneciendo a Guit Design, salvo acuerdo distinto por escrito.'],
  'Os direitos morais de autoria são preservados, conforme a Lei nº 9.610/1998. Fontes, imagens de banco e outros recursos de terceiros seguem as licenças de seus respectivos autores.': ["Moral rights of authorship are preserved under Brazilian Law No. 9,610/1998. Fonts, stock images and other third-party resources follow their respective authors' licenses.", 'Los derechos morales de autor se preservan, conforme a la Ley brasileña nº 9.610/1998. Las fuentes, imágenes de banco y otros recursos de terceros siguen las licencias de sus respectivos autores.'],
  'A Guit Design pode exibir os trabalhos realizados neste site, no Behance e nas redes sociais, sempre com os créditos dos colaboradores envolvidos. Se o projeto precisar ser confidencial, isso deve ser combinado antes do início.': ['Guit Design may display completed work on this site, on Behance and on social media, always crediting the collaborators involved. If a project needs to remain confidential, this must be agreed before it starts.', 'Guit Design puede mostrar los trabajos realizados en este sitio, en Behance y en redes sociales, siempre con los créditos de los colaboradores involucrados. Si el proyecto debe ser confidencial, hay que acordarlo antes de empezar.'],
  'O cliente pode cancelar o projeto a qualquer momento. Os valores referentes a etapas já iniciadas ou concluídas não são reembolsados, e os arquivos dessas etapas só são entregues mediante pagamento correspondente.': ['The client may cancel the project at any time. Amounts for stages already started or completed are non-refundable, and files from those stages are only delivered upon the corresponding payment.', 'El cliente puede cancelar el proyecto en cualquier momento. Los montos de las etapas ya iniciadas o concluidas no se reembolsan, y los archivos de esas etapas solo se entregan mediante el pago correspondiente.'],
  'As imagens, marcas e textos deste site pertencem à Guit Design ou a seus clientes e colaboradores. Não é permitido copiar, reproduzir ou usar esse material sem autorização prévia.': ['The images, brands and text on this site belong to Guit Design or its clients and collaborators. Copying, reproducing or using this material without prior permission is not allowed.', 'Las imágenes, marcas y textos de este sitio pertenecen a Guit Design o a sus clientes y colaboradores. No está permitido copiar, reproducir ni usar este material sin autorización previa.'],
  'Este site não tem formulários, não pede cadastro e não usa cookies de rastreamento ou publicidade. O navegador guarda apenas duas preferências: o idioma escolhido e se a animação de abertura já foi exibida (esta some quando você fecha a aba).': ['This site has no forms, requires no sign-up and uses no tracking or advertising cookies. Your browser only stores two preferences: the language you chose and whether the opening animation has already played (the latter is cleared when you close the tab).', 'Este sitio no tiene formularios, no pide registro y no usa cookies de rastreo ni de publicidad. El navegador solo guarda dos preferencias: el idioma elegido y si la animación de apertura ya se mostró (esta se borra al cerrar la pestaña).'],
  'As conversas acontecem no Discord e no Instagram, que seguem suas próprias políticas de privacidade. Os dados compartilhados nesses canais são usados apenas para responder ao seu pedido e executar o projeto, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Você pode pedir a exclusão desses dados a qualquer momento.': ["Conversations happen on Discord and Instagram, which follow their own privacy policies. Data shared on these channels is used only to answer your request and carry out the project, in accordance with Brazil's General Data Protection Law (Law No. 13,709/2018). You can request the deletion of this data at any time.", 'Las conversaciones se dan en Discord e Instagram, que siguen sus propias políticas de privacidad. Los datos compartidos en esos canales se usan solo para responder a tu pedido y ejecutar el proyecto, de acuerdo con la Ley General de Protección de Datos de Brasil (Ley nº 13.709/2018). Puedes pedir la eliminación de esos datos en cualquier momento.'],
  'Estes termos podem ser atualizados, e a data no topo da página indica a versão em vigor. Para dúvidas, fale comigo no': ['These terms may be updated, and the date at the top of the page shows the version in force. For questions, talk to me on', 'Estos términos pueden actualizarse, y la fecha al inicio de la página indica la versión vigente. Para dudas, háblame por']
};

const langs = ['pt', 'en', 'es'];
const param = new URLSearchParams(location.search).get('lang');
let saved = null;
try {
  if (langs.includes(param)) localStorage.setItem('guit-lang', param);
  saved = localStorage.getItem('guit-lang');
} catch {}
export const lang = langs.includes(param) ? param : langs.includes(saved) ? saved : 'pt';
const col = lang === 'en' ? 0 : 1;
const norm = s => s.replace(/\s+/g, ' ').trim();
export const t = s => (lang === 'pt' ? s : T[norm(s)]?.[col] ?? s);

if (lang !== 'pt') {
  document.documentElement.lang = lang;
  document.title = t(document.title);
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = t(meta.content);
  // Troca só o miolo do texto, preservando os espaços em volta (ex.: "Design com " + <span>)
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walk.nextNode());) {
    const k = norm(n.data);
    if (T[k]) n.data = n.data.replace(/\S(.*\S)?/s, () => T[k][col]);
  }
  for (const el of document.querySelectorAll('[aria-label], [title], [alt]'))
    for (const a of ['aria-label', 'title', 'alt']) if (el.hasAttribute(a)) el.setAttribute(a, t(el.getAttribute(a)));
}

/* Seletor de idioma no fim do menu principal */
const nav = document.querySelector('.topbar nav');
if (nav) {
  const sel = document.createElement('select');
  sel.className = 'lang';
  sel.setAttribute('aria-label', t('Idioma'));
  for (const [code, name] of [['pt', 'Português'], ['en', 'English'], ['es', 'Español']]) {
    const o = new Option(code.toUpperCase(), code, false, code === lang);
    o.title = name;
    o.lang = code;
    sel.add(o);
  }
  sel.addEventListener('change', () => {
    const u = new URL(location.href);
    u.searchParams.set('lang', sel.value);
    location.href = u;
  });
  nav.append(sel);
}
