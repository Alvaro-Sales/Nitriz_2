
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
                src="/images/Air-Force.png"
                alt="Tênis air force 1 mid, na cor branco e preto"
                text="Air Force 1 mid branco"
                href="#"
                precoAntes="R$150"
                precoAtual="R$120"
              />

              <Card
                src="/images/jordan-1-red.png"
                alt="Tênis Jordan 1 mid, na cor vermelho e preto"
                text="Air Jordan 1 mid vermelho"
                href="#"
                precoAtual="R$180"
              />
            
              <Card
                src="/images/jordan-1-yellow.png"
                alt="Tênis Air Jordan 1 mid, na cor amarelo e branco"
                text="Air Jordan 1 mid amarelo"
                href="#"
                precoAntes="R$180"
                precoAtual="R$120"
              />

              <Card
                src="/images/flex-experience.png"
                alt="Tênis flex experience, na cor azul e branco"
                text="Flex Experience Run 11"
                href="#"
                precoAtual="R$140"
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
                src="/images/air-vapor.png"
                alt="Tênis Air Zoom Vapor, na cor rosa e vinho"
                text="Air Zoom Vapor Pro"
                href="#"
                precoAntes="R$170"
                precoAtual="R$130"
              />

              <Card
                src="/images/air-vapor-roxo.png"
                alt="Tênis Air Zoom Vapor, na cor roxa"
                text="Air Zoom Vapor Pro"
                href="#"
                precoAntes="R$170"
                precoAtual="R$130"
              />
            
              <Card
                src="/images/air-force-rosa.png"
                alt="Tênis Air Force 1, na cor rosa e branco"
                text="Air Force Rose"
                href="#"
                precoAtual="R$120"
              />

              <Card
                src="/images/Jordan-1-colorido.png"
                alt="Tênis Jordan 1 mid colorido"
                text="Air Jordan 1 mid colorido"
                href="#"
                precoAntes="R$170"
                precoAtual="R$130"
              />
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
