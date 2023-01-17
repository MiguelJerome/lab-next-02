import Info from '../components/Info'

export default function Home() {
  return <main>
    <div>Je m'appelle Jonathan</div>

    <Info>
      Allo, je suis simple
    </Info>

    <Info color="blue">
      <p>Bonjour, je suis bleu</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Expedita nemo debitis, vel quos excepturi aliquid nulla
        sint sed reprehenderit rem possimus magnam illo ullam
        quidem saepe eos ratione dolorum commodi.
      </p>
    </Info>

    <Info color="green">
      Salut, je suis vert
    </Info>
  </main>
}
