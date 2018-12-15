class PixiManager {
    public renderer: PIXI.SystemRenderer;
    public canvas: HTMLCanvasElement;
    public stage: PIXI.Container;

    constructor() {
        this.renderer = PIXI.autoDetectRenderer(800, 600, {
            transparent: true,
            resolution: 1,
            roundPixels: false,
            antialias: true
        });

        this.canvas = this.renderer.view;
        this.canvas.id = "canvas";
        document.body.appendChild(this.canvas);

        this.stage = new PIXI.Container();


        this.render();
    }

    private render() {
        this.renderer.render(this.stage);
        requestAnimationFrame(()=>this.render());
    }
}

export default new PixiManager();