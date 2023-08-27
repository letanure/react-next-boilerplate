import Main from '@components/Main'
import { use } from 'react'

interface Props {
  params: {
    lang: 'es' | 'en' | 'de'
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default function Home({ params }: Props) {
  const { default: lang } = use(import(`./dictionaries/${params.lang}.json`))
  return (
    <>
      <pre>{JSON.stringify(lang)}</pre>
      <Main />
    </>
  )
}
