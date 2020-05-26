class DemoControl {
  constructor() { }
  async demo (ctx) {
    ctx.body = {
      msg: "message demo"
    }
  }
}


export default new DemoControl();