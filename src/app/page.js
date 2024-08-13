
'use client'

import Header from "../components/header/header.jsx"
import Card from "../components/Card/Card.jsx"
import Backtop from "../components/bgTop/backgroundTop.jsx"

export default function Home() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        
        <meta name="google-site-verification" content="zUCZf5kCCKxr_XItULjNnTJUJ732uD9oUtuv0pm3ZjE" />

        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"></link>
      </head>

      <body className="mobile:overflow-x-hidden">
        <Header />

        <main className="max-w-[100vw] w-full h-full flex items-center flex-col justify-items-center overflow-x-hidden pt-[6vh]">

          {/* Criando um banner no início da página */}
          <Backtop />

          <section>
            {/* Título da seção masculina */}
            <h1 id="masculino"
              className="mt-12 mb-5 text-3xl text-center text-white">
              Seção masculina
            </h1>

            {/* Container dos cards da seção masculina */}
            <div className="flex items-center justify-center flex-wrap">
              <Card
                width={300}
                height={300}
                src="/images/Air-Force.png"
                alt="Tênis air force 1 mid, na cor branco"
                text="Air Force 1 mid branco"
                href="#"
                precoAntes="R$150,00"
                precoAtual="R$120,00"
              />

              <Card
                width={300}
                height={175}
                src="/images/jordan-red.png"
                alt="Tênis Jordan 1 mid, na cor vermelho e bege"
                text="Air Jordan 1 mid vermelho"
                href="#"
                precoAtual="R$180,00"
              />
            
              <Card
                width={300}
                height={178}
                src="/images/jordan-blue.png"
                alt="Tênis Air Jordan 1 mid, na cor branco e azul"
                text="Air Jordan 1 mid ciano"
                href="#"
                precoAntes="R$180,00"
                precoAtual="R$120,00"
              />

              <Card
                width={300}
                height={142}
                src="/images/nike-run.png"
                alt="Tênis flex experience, na cor verde claro"
                text="Flex Experience Run 11"
                href="#"
                precoAtual="R$140,00"
              />
            </div>
          </section>

          <section>
            {/* Título da seção feminina */}
            <h1 id="feminino"
              className="mt-12 mb-5 text-3xl text-center text-white">
              Seção feminina
            </h1>

            {/* Container dos cards da seção feminina */}
            <div className="flex items-center justify-center flex-wrap">
              <Card
                width={300}
                height={131}
                src="/images/air-vapor.png"
                alt="Tênis Air Zoom Vapor, na cor rosa e vinho"
                text="Air Zoom Vapor Pro"
                href="#"
                precoAntes="R$170,00"
                precoAtual="R$130,00"
              />

              <Card
                width={300}
                height={135}
                src="/images/air-vapor-roxo.png"
                alt="Tênis Air Zoom Vapor, na cor roxa"
                text="Air Zoom Vapor Pro"
                href="#"
                precoAntes="R$170,00"
                precoAtual="R$130,00"
              />
            
              <Card
                width={300}
                height={152}
                src="/images/air-force-rosa.png"
                alt="Tênis Air Force 1, na cor rosa e branco"
                text="Air Force Rose"
                href="#"
                precoAtual="R$120,00"
              />

              <Card
                width={300}
                height={183}
                src="/images/Jordan-1-colorido.png"
                alt="Tênis Jordan 1 mid colorido"
                text="Air Jordan 1 mid colorido"
                href="#"
                precoAntes="R$170,00"
                precoAtual="R$130,00"
              />
            </div>
          </section>

          <section>
            {/* Título da seção de corta vento */}
            <h1 id="cortaVento"
              className="mt-12 mb-5 text-3xl text-center text-white">
              Seção de corta vento
            </h1>

            {/* Container dos cards da seção de corta vento */}
            <div className="flex items-center justify-center flex-wrap">
              <Card
                width={280}
                height={400}
                src="/images/corta-vento-F.png"
                alt="Corta vento, na cor rosa e preto"
                text="Corta Vento Confort"
                href="#"
                precoAtual="R$150,00"
              />

              <Card
                width={280}
                height={400}
                src="/images/corta-vento-F2.png"
                alt="Corta vento, na cor rosa e branco"
                text="Corta Vento Confort Pro"
                href="#"
                precoAntes="R$190,00"
                precoAtual="R$150,00"
              />
            
              <Card
                width={280}
                height={400}
                src="/images/corta-vento-M.png"
                alt="Corta Vento, na cor branco e preto"
                text="Corta Vento Flex Pro"
                href="#"
                precoAntes="R$190,00"
                precoAtual="R$160,00"
              />

              <Card
                width={280}
                height={400}
                src="/images/corta-vento-M2.png"
                alt="Corta vento, na cor azul e cinza"
                text="Corta Vento X Pro"
                href="#"
                precoAtual="R$160,00"
              />
            </div>
          </section>

          <section>
            {/* Título da seção de inverno */}
            <h1 id="kitsNike"
              className="mt-12 mb-5 text-3xl text-center text-white">
              Seção de inverno
            </h1>

            {/* Container dos cards da seção de inverno */}
            <div className="flex items-center justify-center flex-wrap">
              <Card
                width={280}
                height={400}
                src="/images/kit-inverno.png"
                alt="Kit Inverno masculino"
                text="Kit Inverno masculino"
                href="#"
                precoAtual="R$250,00"
              />

              <Card
                width={280}
                height={400}
                src="/images/kit-inverno-2.png"
                alt="Kit Inverno"
                text="Kit Inverno feminino"
                href="#"
                precoAntes="R$290,00"
                precoAtual="R$260,00"
              />
            
              <Card
                width={280}
                height={400}
                src="/images/kit-inverno-3.png"
                alt="Kit Inverno"
                text="Kit Inverno feminino 2"
                href="#"
                precoAntes="R$250,00"
                precoAtual="R$230,00"
              />

              <Card
                width={280}
                height={400}
                src="/images/combo-casal-inverno.png"
                alt="Combo Casal Inverno"
                text="Combo Casal Inverno"
                href="#"
                precoAtual="R$350,00"
              />
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
