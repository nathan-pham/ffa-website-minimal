export default class Emoji {
    constructor({ width, height }) {
        this.emoji = this.#selectEmoji();

        this.width = width;
        this.height = height;

        this.x = Math.random() * width;
        this.y = height + Math.random() * 600;
        this.fallSpeed = 1;

        // prettier-ignore
        this.rotationSpeed = (Math.random() / 10) * (Math.random() > 0.5 ? 1 : -1);
        this.rotation = 0;
        this.size = 24;
    }

    update(mouseX, mouseY) {
        const distance = Math.sqrt(
            Math.pow(mouseX - this.x - this.size / 2, 2) +
                Math.pow(mouseY - this.y - this.size / 2, 2)
        );

        if (distance < this.size * 2 && this.fallSpeed == 1) {
            this.fallSpeed = -10;
            this.rotationSpeed *= 1.5;
        }

        this.y -= this.fallSpeed;
        this.rotation += this.rotationSpeed;

        if (
            this.y < -this.size * 2 ||
            (this.fallSpeed !== 1 && this.y > this.height + this.size)
        ) {
            this.y = this.height + Math.random() * 600;
            this.x = Math.random() * this.width;

            // prettier-ignore
            this.rotationSpeed = (Math.random() / 10) * (Math.random() > 0.5 ? 1 : -1);
            this.fallSpeed = 1;
        }
    }

    render(ctx) {
        ctx.font = `${this.size * 2}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.save();

        const originX = this.x + this.size / 2;
        const originY = this.y + this.size / 2;
        ctx.translate(originX, originY);
        ctx.rotate(this.rotation % 360);
        ctx.translate(-originX, -originY);

        ctx.fillText(this.emoji, this.x, this.y);
        ctx.restore();
    }

    #selectEmoji() {
        const emojis = ["🏵️", "🌱", "🌵", "🌿", "☘️", "🌰"];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }
}
