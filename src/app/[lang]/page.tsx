import Main from '@components/Main'
import { use } from 'react'

interface Props {
  params: {
    lang: 'en' | 'pt'
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default function Home({ params }: Props) {
  const { default: lang } = use(import(`./dictionaries/${params.lang}.json`))
  console.log('lang', lang)
  return (
    <>
      <Main />
    </>
  )
}
