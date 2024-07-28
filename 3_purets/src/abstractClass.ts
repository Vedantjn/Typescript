abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number {
        //Complex calculation
        return 8
    }
}

// const vedant1 = new TakePhoto("test", "test")

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
        
    }
}

const vedant2 = new Instagram("test", "test", 9)