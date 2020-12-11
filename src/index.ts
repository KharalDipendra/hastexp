import fetch from 'node-fetch'


type Extensions = 'bat' | 'c' | 'cpp' | 'css' | 'html' | 'ini' | 'java' | 'js' | 'jsx' | 'json' | 'lua' | 'md' | 'php' | 'py' | 'pyc' | 'scss' | 'sql' | 'xml' | 'yaml' | 'ahk'


export class HastExp {
  private url: string
  public constructor() {
    this.url = 'https://hastebin.com/documents'
  }

  public async makePost(message: string, extension: Extensions = 'js'): Promise<any> {
    if (typeof(message) !== 'string') return new Error('Content header should be a string but got ' + typeof(message) + ' instead')
    const result = await fetch(this.url, { method: 'POST', body: message })

    if (result.status === 200) {
      const jsonDate = await result.json()
      return `${this.url.slice(0, -10)}/${jsonDate.key}.${extension}`
    }

  }
  public async fetchPost(linkSlug: string) {
    if (typeof(linkSlug) !== 'string') return new Error(`Lik should should be a string but got ${typeof(linkSlug)} instead`)
    if (linkSlug.length !== 10) return new Error(`Link slug should be 10 characters.`)
    const link: object | any = await fetch(`https://hastebin.com/documents/${linkSlug}`, {method: 'GET'})
    let linkData = await link.json()
    return linkData
  }

}






