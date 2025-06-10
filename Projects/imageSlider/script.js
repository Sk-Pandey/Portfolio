const img = document.getElementById("image");
        const leftBtn = document.getElementById("left");
        const rightBtn = document.getElementById("right");

        const images =["https://img.freepik.com/free-vector/beautiful-green-landscape-background_1048-2991.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/nature-background-grassy-landscape_1048-1305.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/silhouette-easter-bunnies-grassy-landscape_1048-1333.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/vector-illustration-mehndi-ornament-traditional-indian-style-ornamental-floral-elements-henna-tattoo-stickers-mehndi-yoga-design-cards-prints-abstract-floral-vector-illustration_1217-413.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/collage-vintage-flower-illustration-vector-mixed-media-art_53876-144465.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/sunset-landscape-with-tree-birds_1048-49.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/vector-illustration-mehndi-ornament-traditional-indian-style-ornamental-floral-elements-henna-tattoo-stickers-mehndi-yoga-design-cards-prints-abstract-floral-vector-illustration_1217-413.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/landscape-background-with-trees-birds_1048-1242.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740",
            "https://img.freepik.com/free-vector/summer-landscape-with-daisies-grass_1048-2290.jpg?ga=GA1.1.1060571533.1748167966&semt=ais_hybrid&w=740"
        ];

        let index = 0;

        leftBtn.addEventListener("click",()=>{
            index = (index - 1 + images.length) % images.length;
            img.src=images[index];
        })
        rightBtn.addEventListener("click",()=>{
             index = (index + 1) % images.length;
            img.src=images[index];
        })
        