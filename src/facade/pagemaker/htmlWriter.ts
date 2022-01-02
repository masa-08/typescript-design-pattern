import fs from 'fs'

export class HtmlWriter {
  private readonly filename: string
  private readonly fd?: number
  constructor(filename: string) {
    this.filename = filename
    try {
      this.fd = fs.openSync(filename, 'w')
    } catch (e) {
      console.log(e)
    }
  }

  title(title: string) {
    if (this.fd == null) {
      return
    }
    fs.writeSync(this.fd, '<html>')
    fs.writeSync(this.fd, '<head>')
    fs.writeSync(this.fd, `<title>${title}</title>`)
    fs.writeSync(this.fd, '</head>')
    fs.writeSync(this.fd, '<body>\n')
    fs.writeSync(this.fd, `<h1>${title}</h1>\n`)
  }

  paragraph(msg: string) {
    this.fd != null && fs.writeSync(this.fd, `<p>${msg}</p>`)
  }

  link(href: string, caption: string) {
    this.fd != null && fs.writeSync(this.fd, `<a href="${href}">${caption}</a>`)
  }

  mailto(addr: string, name: string) {
    this.fd != null && this.link(`mailto:${addr}`, name)
  }

  close() {
    if (this.fd == null) {
      return
    }
    fs.writeSync(this.fd, '</body>')
    fs.writeSync(this.fd, '</html>\n')
    fs.closeSync(this.fd)
  }
}
