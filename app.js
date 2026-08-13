/* ==========================================================================
   ROAD TO DOOMSDAY — ULTIMATE MARVEL MULTIVERSE WATCHLIST APPLICATION
   105 TITLES COMPLETE DATASET WITH IMPORTANCE BADGES & STREAMING LINKS
   ========================================================================== */

const MARVEL_ROADMAP = [
    // MCU — INFINITY SAGA (1 - 23)
    { id: "mcu_01", title: "Iron Man", year: 2008, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
    { id: "mcu_02", title: "The Incredible Hulk", year: 2008, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/gKtx8P2P7xYv82y9w3B89yJp46c.jpg" },
    { id: "mcu_03", title: "Iron Man 2", year: 2010, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/6ss1PLGYoMDU29Wfqol2L2218w6.jpg" },
    { id: "mcu_04", title: "Thor", year: 2011, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/prLXq027xYfG6e2Y3tC1Yd84G1W.jpg" },
    { id: "mcu_05", title: "Captain America: The First Avenger", year: 2011, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/vSNxAJTlD0r02Z9sPYZ825318p.jpg" },
    { id: "mcu_06", title: "The Avengers", year: 2012, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/RYMX2wcKSpL81Sp9QqOfplKD04.jpg" },
    { id: "mcu_07", title: "Iron Man 3", year: 2013, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/qhPtAc1TKbMPqNvcdYWsn9zGDFB.jpg" },
    { id: "mcu_08", title: "Thor: The Dark World", year: 2013, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/wp6OxE422WPqvyC67Lh239cVDgB.jpg" },
    { id: "mcu_09", title: "Captain America: The Winter Soldier", year: 2014, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/tVFRL1IkLE3vfZnVGcfhu29hFsy.jpg" },
    { id: "mcu_10", title: "Guardians of the Galaxy", year: 2014, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/r7D130f40z56G5ZfC0B40Gf8L67.jpg" },
    { id: "mcu_11", title: "Avengers: Age of Ultron", year: 2015, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/4ssDuvEDkS18otud8LalvWz2y2B.jpg" },
    { id: "mcu_12", title: "Ant-Man", year: 2015, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/8gTqP99L4xY3vfZ041b6D48gH5f.jpg" },
    { id: "mcu_13", title: "Captain America: Civil War", year: 2016, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/rAGi1fFIqBVM2yYjhB916G1sWMC.jpg" },
    { id: "mcu_14", title: "Doctor Strange", year: 2016, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/uGBVj3hEbCoZbD2l9w3b6Vd0A8d.jpg" },
    { id: "mcu_15", title: "Guardians of the Galaxy Vol. 2", year: 2017, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/y4MBt0mWEFuVvHRGDgUdZNEgBev.jpg" },
    { id: "mcu_16", title: "Spider-Man: Homecoming", year: 2017, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/c24sv2weTHPsmDa7jEMN0m2P3Wq.jpg" },
    { id: "mcu_17", title: "Thor: Ragnarok", year: 2017, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/rzRwT21sW3ZSu5HYxZ1u8dCwbFQ.jpg" },
    { id: "mcu_18", title: "Black Panther", year: 2018, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/uxzzxijgPIY7slzFvMotPv8fKAW.jpg" },
    { id: "mcu_19", title: "Avengers: Infinity War", year: 2018, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/7WsyChLLEzcqIFv2VwMvyDhL0ER.jpg" },
    { id: "mcu_20", title: "Ant-Man and the Wasp", year: 2018, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/rv1AWwG7j66ZDEwRjGIMaLSpLEq.jpg" },
    { id: "mcu_21", title: "Captain Marvel", year: 2019, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/AtsgWhDnHTq68L0LjoW9A5w6z82.jpg" },
    { id: "mcu_22", title: "Avengers: Endgame", year: 2019, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9v1chvyDLW.jpg" },
    { id: "mcu_23", title: "Spider-Man: Far From Home", year: 2019, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/4D0PpKH2v8SpMvofFCOpGJWosG.jpg" },

    // MCU — MULTIVERSE SAGA (24 - 38)
    { id: "mcu_24", title: "WandaVision", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/4yFGyEw1KD66rODplw3voLStiAh.jpg" },
    { id: "mcu_25", title: "Loki — Season 1", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/voHU1StwKwXFiMVGlGDFBh6TuUt.jpg" },
    { id: "mcu_26", title: "What If...? — Season 1", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/lztz5XyTkoYKmF5eYlWy2lLhR1.jpg" },
    { id: "mcu_27", title: "Spider-Man: No Way Home", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
    { id: "mcu_28", title: "Doctor Strange in the Multiverse of Madness", year: 2022, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/9G0KivzF2yN0Y9l4m5L0D0K4uG.jpg" },
    { id: "mcu_29", title: "Loki — Season 2", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/serp9w4.jpg" },
    { id: "mcu_30", title: "Ant-Man and the Wasp: Quantumania", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/ngl2FKtkIGYmmRkgXiL2vYvaPpB.jpg" },
    { id: "mcu_31", title: "Guardians of the Galaxy Vol. 3", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/r2J02Z2OpNTctfOSN1Yy5TeZe65.jpg" },
    { id: "mcu_32", title: "The Marvels", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/9GBh0gBPyA2jfq.jpg" },
    { id: "mcu_33", title: "What If...? — Season 2", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/mU4N6363mE5gRjW8q7G9i3N0c.jpg" },
    { id: "mcu_34", title: "What If...? — Season 3", year: 2024, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/whatif3.jpg" },
    { id: "mcu_35", title: "Deadpool & Wolverine", year: 2024, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
    { id: "mcu_36", title: "Agatha All Along", year: 2024, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/agatha.jpg" },
    { id: "mcu_37", title: "The Fantastic Four: First Steps", year: 2025, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/l4pG9.jpg" },
    { id: "mcu_38", title: "Spider-Man: Brand New Day", year: 2026, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/spidey4.jpg" },

    // MCU — IMPORTANT SUPPORTING STORIES (39 - 52)
    { id: "supp_39", title: "Black Widow", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/qAZ0NmVcYFiWCj3v4yL1yL6.jpg" },
    { id: "supp_40", title: "The Falcon and the Winter Soldier", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/6kbAMLteI9vVJ2B8f.jpg" },
    { id: "supp_41", title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/1BIoJGKbXjdFDAqM2rXkd2LwYuv.jpg" },
    { id: "supp_42", title: "Eternals", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/bcCBq9N1EMo3daNIWdJ121rmCh6.jpg" },
    { id: "supp_43", title: "Hawkeye", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/pqEqukL21s4D32o6D4v1a.jpg" },
    { id: "supp_44", title: "Moon Knight", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/YksR65xEooJJjPc3MeI4GKoA46.jpg" },
    { id: "supp_45", title: "Ms. Marvel", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/3P52oz9OjhToGlbA28xWBzLw1G.jpg" },
    { id: "supp_46", title: "Thor: Love and Thunder", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/p1LfL08pG3nF03B4.jpg" },
    { id: "supp_47", title: "Black Panther: Wakanda Forever", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/sv1xZawMvlBxmvMML2R.jpg" },
    { id: "supp_48", title: "She-Hulk: Attorney at Law", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/hJfI9bZxyK5tD3R.jpg" },
    { id: "supp_49", title: "Werewolf by Night", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/mv8M195wY2tN6A5.jpg" },
    { id: "supp_50", title: "Secret Invasion", year: 2023, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/fT8n3lG7yV0L.jpg" },
    { id: "supp_51", title: "Echo", year: 2024, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/echo.jpg" },
    { id: "supp_52", title: "Daredevil: Born Again — Season 1", year: 2025, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/dba1.jpg" },

    // X-MEN / FOX UNIVERSE (53 - 64)
    { id: "xmen_53", title: "X-Men", year: 2000, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/bRDa2x2YipYy.jpg" },
    { id: "xmen_54", title: "X2: X-Men United", year: 2003, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/sOjhj9Y2s.jpg" },
    { id: "xmen_55", title: "X-Men: The Last Stand", year: 2006, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/6AawzL22.jpg" },
    { id: "xmen_56", title: "X-Men Origins: Wolverine", year: 2009, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/j55J.jpg" },
    { id: "xmen_57", title: "X-Men: First Class", year: 2011, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/vW8b3hB.jpg" },
    { id: "xmen_58", title: "The Wolverine", year: 2013, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/9k8K.jpg" },
    { id: "xmen_59", title: "X-Men: Days of Future Past", year: 2014, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/tC12H.jpg" },
    { id: "xmen_60", title: "Deadpool", year: 2016, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/f02wa.jpg" },
    { id: "xmen_61", title: "X-Men: Apocalypse", year: 2016, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/266D.jpg" },
    { id: "xmen_62", title: "Logan", year: 2017, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/fnbjc.jpg" },
    { id: "xmen_63", title: "Deadpool 2", year: 2018, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/to0sp.jpg" },
    { id: "xmen_64", title: "Dark Phoenix", year: 2019, category: "XMEN_FOX", categoryName: "X-Men / Fox Universe", part: "X-MEN / FOX UNIVERSE", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/c24s.jpg" },

    // FANTASTIC FOUR — OTHER UNIVERSES (65 - 67)
    { id: "f4_65", title: "Fantastic Four (2005)", year: 2005, category: "FANTASTIC_FOUR", categoryName: "Fantastic Four — Other Universes", part: "FANTASTIC FOUR — OTHER UNIVERSES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/g9Vp2.jpg" },
    { id: "f4_66", title: "Fantastic Four: Rise of the Silver Surfer", year: 2007, category: "FANTASTIC_FOUR", categoryName: "Fantastic Four — Other Universes", part: "FANTASTIC FOUR — OTHER UNIVERSES", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/7aLz.jpg" },
    { id: "f4_67", title: "Fantastic Four (2015)", year: 2015, category: "FANTASTIC_FOUR", categoryName: "Fantastic Four — Other Universes", part: "FANTASTIC FOUR — OTHER UNIVERSES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/8d8.jpg" },

    // TOBEY MAGUIRE SPIDER-MAN UNIVERSE (68 - 70)
    { id: "tobey_68", title: "Spider-Man", year: 2002, category: "TOBEY_SPIDERMAN", categoryName: "Tobey Maguire Spider-Man", part: "TOBEY MAGUIRE SPIDER-MAN UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/gh4c.jpg" },
    { id: "tobey_69", title: "Spider-Man 2", year: 2004, category: "TOBEY_SPIDERMAN", categoryName: "Tobey Maguire Spider-Man", part: "TOBEY MAGUIRE SPIDER-MAN UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/olw1.jpg" },
    { id: "tobey_70", title: "Spider-Man 3", year: 2007, category: "TOBEY_SPIDERMAN", categoryName: "Tobey Maguire Spider-Man", part: "TOBEY MAGUIRE SPIDER-MAN UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/2jH.jpg" },

    // ANDREW GARFIELD SPIDER-MAN UNIVERSE (71 - 72)
    { id: "andrew_71", title: "The Amazing Spider-Man", year: 2012, category: "ANDREW_SPIDERMAN", categoryName: "Andrew Garfield Spider-Man", part: "ANDREW GARFIELD SPIDER-MAN UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/dQw4.jpg" },
    { id: "andrew_72", title: "The Amazing Spider-Man 2", year: 2014, category: "ANDREW_SPIDERMAN", categoryName: "Andrew Garfield Spider-Man", part: "ANDREW GARFIELD SPIDER-MAN UNIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/c24.jpg" },

    // SONY SPIDER-MAN UNIVERSE (73 - 78)
    { id: "sony_73", title: "Venom", year: 2018, category: "SONY_SPIDERMAN", categoryName: "Sony Spider-Man Universe", part: "SONY SPIDER-MAN UNIVERSE", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/2B5.jpg" },
    { id: "sony_74", title: "Venom: Let There Be Carnage", year: 2021, category: "SONY_SPIDERMAN", categoryName: "Sony Spider-Man Universe", part: "SONY SPIDER-MAN UNIVERSE", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/123.jpg" },
    { id: "sony_75", title: "Morbius", year: 2022, category: "SONY_SPIDERMAN", categoryName: "Sony Spider-Man Universe", part: "SONY SPIDER-MAN UNIVERSE", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/456.jpg" },
    { id: "sony_76", title: "Madame Web", year: 2024, category: "SONY_SPIDERMAN", categoryName: "Sony Spider-Man Universe", part: "SONY SPIDER-MAN UNIVERSE", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/789.jpg" },
    { id: "sony_77", title: "Kraven the Hunter", year: 2024, category: "SONY_SPIDERMAN", categoryName: "Sony Spider-Man Universe", part: "SONY SPIDER-MAN UNIVERSE", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/101.jpg" },
    { id: "sony_78", title: "Venom: The Last Dance", year: 2024, category: "SONY_SPIDERMAN", categoryName: "Sony Spider-Man Universe", part: "SONY SPIDER-MAN UNIVERSE", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/102.jpg" },

    // SPIDER-VERSE ANIMATED (79 - 80)
    { id: "sverse_79", title: "Spider-Man: Into the Spider-Verse", year: 2018, category: "ANIMATED_SPIDERVERSE", categoryName: "Spider-Verse (Animated)", part: "SPIDER-VERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/ii2.jpg" },
    { id: "sverse_80", title: "Spider-Man: Across the Spider-Verse", year: 2023, category: "ANIMATED_SPIDERVERSE", categoryName: "Spider-Verse (Animated)", part: "SPIDER-VERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/8Vt.jpg" },

    // MARVEL ANIMATED / MULTIVERSE (81 - 83)
    { id: "anim_81", title: "X-Men '97 — Season 1", year: 2024, category: "MARVEL_ANIMATED", categoryName: "Marvel Animated / Multiverse", part: "MARVEL ANIMATED / MULTIVERSE", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/x97.jpg" },
    { id: "anim_82", title: "Your Friendly Neighborhood Spider-Man — Season 1", year: 2025, category: "MARVEL_ANIMATED", categoryName: "Marvel Animated / Multiverse", part: "MARVEL ANIMATED / MULTIVERSE", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/yfns.jpg" },
    { id: "anim_83", title: "Marvel Zombies — Season 1", year: 2025, category: "MARVEL_ANIMATED", categoryName: "Marvel Animated / Multiverse", part: "MARVEL ANIMATED / MULTIVERSE", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/zombies.jpg" },

    // MARVEL TELEVISION / DEFENDERS (84 - 96)
    { id: "tv_84", title: "Daredevil — Season 1", year: 2015, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/dd1.jpg" },
    { id: "tv_85", title: "Jessica Jones — Season 1", year: 2015, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/jj1.jpg" },
    { id: "tv_86", title: "Luke Cage — Season 1", year: 2016, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/lc1.jpg" },
    { id: "tv_87", title: "Iron Fist — Season 1", year: 2017, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/if1.jpg" },
    { id: "tv_88", title: "The Defenders", year: 2017, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/def.jpg" },
    { id: "tv_89", title: "The Punisher — Season 1", year: 2017, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/p1.jpg" },
    { id: "tv_90", title: "Daredevil — Season 2", year: 2016, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/dd2.jpg" },
    { id: "tv_91", title: "Luke Cage — Season 2", year: 2018, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/lc2.jpg" },
    { id: "tv_92", title: "Iron Fist — Season 2", year: 2018, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/if2.jpg" },
    { id: "tv_93", title: "The Punisher — Season 2", year: 2019, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/p2.jpg" },
    { id: "tv_94", title: "Daredevil — Season 3", year: 2018, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/dd3.jpg" },
    { id: "tv_95", title: "Jessica Jones — Season 2", year: 2018, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/jj2.jpg" },
    { id: "tv_96", title: "Jessica Jones — Season 3", year: 2019, category: "MARVEL_TELEVISION", categoryName: "Marvel Television / Defenders", part: "MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/jj3.jpg" },

    // OTHER MARVEL UNIVERSES (97 - 101)
    { id: "other_97", title: "Legion — Season 1", year: 2017, category: "OTHER_UNIVERSES", categoryName: "Other Marvel Universes", part: "OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/legion1.jpg" },
    { id: "other_98", title: "Legion — Season 2", year: 2018, category: "OTHER_UNIVERSES", categoryName: "Other Marvel Universes", part: "OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/legion2.jpg" },
    { id: "other_99", title: "Legion — Season 3", year: 2019, category: "OTHER_UNIVERSES", categoryName: "Other Marvel Universes", part: "OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/legion3.jpg" },
    { id: "other_100", title: "The Gifted — Season 1", year: 2017, category: "OTHER_UNIVERSES", categoryName: "Other Marvel Universes", part: "OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/gifted1.jpg" },
    { id: "other_101", title: "The Gifted — Season 2", year: 2018, category: "OTHER_UNIVERSES", categoryName: "Other Marvel Universes", part: "OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://image.tmdb.org/t/p/w200/gifted2.jpg" },

    // EXTRA MULTIVERSE PREPARATION (102 - 105)
    { id: "extra_102", title: "Captain America: Brave New World", year: 2025, category: "EXTRA_PREPARATION", categoryName: "Extra Multiverse Preparation", part: "EXTRA MULTIVERSE PREPARATION", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/bnw.jpg" },
    { id: "extra_103", title: "Thunderbolts*", year: 2025, category: "EXTRA_PREPARATION", categoryName: "Extra Multiverse Preparation", part: "EXTRA MULTIVERSE PREPARATION", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/tb.jpg" },
    { id: "extra_104", title: "Ironheart", year: 2025, category: "EXTRA_PREPARATION", categoryName: "Extra Multiverse Preparation", part: "EXTRA MULTIVERSE PREPARATION", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/ironheart.jpg" },
    { id: "extra_105", title: "Wonder Man", year: 2025, category: "EXTRA_PREPARATION", categoryName: "Extra Multiverse Preparation", part: "EXTRA MULTIVERSE PREPARATION", importance: "IMPORTANT", poster: "https://image.tmdb.org/t/p/w200/wonderman.jpg" }
];

// LOCALSTORAGE KEY
const STORAGE_KEY = "doomsday_watchlist_watched_ids";

class WatchlistApp {
    constructor() {
        this.watchedSet = new Set(this.loadWatchedFromStorage());
        this.searchQuery = "";
        this.selectedUniverse = "ALL";
        this.selectedImportance = "ALL";
        this.selectedStatus = "ALL";
        
        this.initDOM();
        this.initCountdown();
        this.renderWatchlist();
        this.updateProgress();
        this.attachEventListeners();
    }

    loadWatchedFromStorage() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Failed to load progress from localStorage", e);
            return [];
        }
    }

    saveWatchedToStorage() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(this.watchedSet)));
        } catch (e) {
            console.error("Failed to save progress to localStorage", e);
        }
    }

    initDOM() {
        this.universeContainer = document.getElementById("universeContainer");
        this.emptyState = document.getElementById("emptyState");
        this.watchedCountEl = document.getElementById("watchedCount");
        this.percentageBadgeEl = document.getElementById("percentageBadge");
        this.progressBarFillEl = document.getElementById("progressBarFill");
        
        this.searchInput = document.getElementById("searchInput");
        this.clearSearchBtn = document.getElementById("clearSearchBtn");
        this.universeFilter = document.getElementById("universeFilter");
        this.importanceFilter = document.getElementById("importanceFilter");
        this.statusFilter = document.getElementById("statusFilter");
        this.resetFiltersBtn = document.getElementById("resetFiltersBtn");
        
        this.resetBtn = document.getElementById("resetBtn");
        this.resetModal = document.getElementById("resetModal");
        this.cancelResetBtn = document.getElementById("cancelResetBtn");
        this.confirmResetBtn = document.getElementById("confirmResetBtn");
    }

    // LIVE COUNTDOWN TIMER TO DECEMBER 18, 2026
    initCountdown() {
        const targetDate = new Date("2026-12-18T00:00:00Z").getTime();
        
        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                document.getElementById("days").textContent = "00";
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = String(days).padStart(2, '0');
            document.getElementById("hours").textContent = String(hours).padStart(2, '0');
            document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
            document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    // RENDER WATCHLIST WITH FILTERS & BADGES
    renderWatchlist() {
        this.universeContainer.innerHTML = "";

        const query = this.searchQuery.trim().toLowerCase();

        const filteredList = MARVEL_ROADMAP.filter(item => {
            // Search filter
            const matchesSearch = !query || 
                item.title.toLowerCase().includes(query) || 
                String(item.year).includes(query) ||
                item.categoryName.toLowerCase().includes(query);

            // Universe filter
            const matchesUniverse = this.selectedUniverse === "ALL" || item.category === this.selectedUniverse;

            // Importance filter
            const matchesImportance = this.selectedImportance === "ALL" || item.importance === this.selectedImportance;

            // Status filter
            const isWatched = this.watchedSet.has(item.id);
            const matchesStatus = this.selectedStatus === "ALL" || 
                (this.selectedStatus === "WATCHED" && isWatched) || 
                (this.selectedStatus === "UNWATCHED" && !isWatched);

            return matchesSearch && matchesUniverse && matchesImportance && matchesStatus;
        });

        if (filteredList.length === 0) {
            this.emptyState.classList.remove("hidden");
            return;
        }

        this.emptyState.classList.add("hidden");

        // Group by part/category
        const groupedMap = new Map();
        filteredList.forEach(item => {
            if (!groupedMap.has(item.part)) {
                groupedMap.set(item.part, []);
            }
            groupedMap.get(item.part).push(item);
        });

        groupedMap.forEach((items, partTitle) => {
            const section = document.createElement("section");
            section.className = "universe-section";

            const header = document.createElement("div");
            header.className = "universe-section-header";
            header.innerHTML = `
                <h3 class="universe-section-title">${partTitle}</h3>
                <span class="universe-section-count">${items.length} ${items.length === 1 ? 'TITLE' : 'TITLES'}</span>
            `;
            section.appendChild(header);

            const grid = document.createElement("div");
            grid.className = "movie-cards-grid";

            items.forEach(item => {
                const isWatched = this.watchedSet.has(item.id);

                // Index number from absolute 1-105 order
                const globalIndex = MARVEL_ROADMAP.findIndex(m => m.id === item.id) + 1;
                const cardNumber = String(globalIndex).padStart(2, '0');

                // Updated "Where to Watch" Google query without "India legal streaming" as requested
                const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(item.title + ' where to watch')}`;

                let importanceBadgeHTML = "";
                if (item.importance === "ESSENTIAL") {
                    importanceBadgeHTML = `<span class="importance-badge essential" title="Directly useful for understanding Doomsday">🔴 ESSENTIAL</span>`;
                } else if (item.importance === "IMPORTANT") {
                    importanceBadgeHTML = `<span class="importance-badge important" title="Strongly connected to characters or multiverse">🟡 IMPORTANT</span>`;
                } else {
                    importanceBadgeHTML = `<span class="importance-badge optional" title="Helps understand wider Marvel multiverse">⚪ OPTIONAL</span>`;
                }

                const card = document.createElement("div");
                card.className = `movie-card ${isWatched ? 'watched' : ''}`;
                card.dataset.id = item.id;

                card.innerHTML = `
                    <div class="card-left">
                        <label class="custom-checkbox-wrapper" title="Mark as watched">
                            <input type="checkbox" ${isWatched ? 'checked' : ''} data-id="${item.id}">
                            <span class="checkmark"></span>
                        </label>
                        <span class="item-number">${cardNumber}</span>
                        <img src="${item.poster}" alt="${item.title} poster" class="poster-img" loading="lazy" onerror="this.src='https://via.placeholder.com/100x150/0D1510/00E676?text=MARVEL'">
                        <div class="movie-details">
                            <div class="movie-title-row">
                                <span class="movie-title">${item.title}</span>
                                ${importanceBadgeHTML}
                            </div>
                            <div class="movie-meta">
                                <span>${item.year}</span>
                                <span class="meta-dot">•</span>
                                <span class="universe-tag">${item.categoryName}</span>
                            </div>
                        </div>
                    </div>
                    <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="btn-where-to-watch" title="Search streaming availability">
                        🔎 Where to Watch
                    </a>
                `;

                grid.appendChild(card);
            });

            section.appendChild(grid);
            this.universeContainer.appendChild(section);
        });
    }

    // UPDATE PROGRESS BAR & MILESTONES
    updateProgress() {
        const total = MARVEL_ROADMAP.length;
        const watchedCount = this.watchedSet.size;
        const percentage = Math.round((watchedCount / total) * 100);

        this.watchedCountEl.textContent = `${watchedCount} / ${total}`;
        this.percentageBadgeEl.textContent = `${percentage}% Complete`;
        this.progressBarFillEl.style.width = `${percentage}%`;

        // Milestone updates
        const nodeProgressText = document.getElementById("node-progress-text");
        if (nodeProgressText) {
            nodeProgressText.textContent = `${watchedCount} Watched`;
        }

        const nodeStarted = document.getElementById("node-started");
        const nodeProgress = document.getElementById("node-progress");
        const nodeMultiverse = document.getElementById("node-multiverse");
        const nodeXmen = document.getElementById("node-xmen");
        const nodeSpider = document.getElementById("node-spider");
        const nodeDoomsday = document.getElementById("node-doomsday");

        const line1 = document.getElementById("line-1");
        const line2 = document.getElementById("line-2");
        const line3 = document.getElementById("line-3");
        const line4 = document.getElementById("line-4");
        const line5 = document.getElementById("line-5");

        if (watchedCount > 0) {
            nodeStarted.classList.add("active");
            line1.classList.add("active");
            nodeProgress.classList.add("active");
        } else {
            line1.classList.remove("active");
            nodeProgress.classList.remove("active");
        }

        if (watchedCount >= 25 || this.watchedSet.has("mcu_25")) {
            line2.classList.add("active");
            nodeMultiverse.classList.add("active");
        } else {
            line2.classList.remove("active");
            nodeMultiverse.classList.remove("active");
        }

        if (watchedCount >= 55 || this.watchedSet.has("mcu_35")) {
            line3.classList.add("active");
            nodeXmen.classList.add("active");
        } else {
            line3.classList.remove("active");
            nodeXmen.classList.remove("active");
        }

        if (watchedCount >= 80 || this.watchedSet.has("sverse_80")) {
            line4.classList.add("active");
            nodeSpider.classList.add("active");
        } else {
            line4.classList.remove("active");
            nodeSpider.classList.remove("active");
        }

        if (watchedCount >= 105 || percentage === 100) {
            line5.classList.add("active");
            nodeDoomsday.classList.add("active");
        } else {
            line5.classList.remove("active");
            nodeDoomsday.classList.remove("active");
        }
    }

    // EVENT LISTENERS
    attachEventListeners() {
        this.universeContainer.addEventListener("change", (e) => {
            if (e.target.matches("input[type='checkbox']")) {
                const id = e.target.dataset.id;
                const card = e.target.closest(".movie-card");

                if (e.target.checked) {
                    this.watchedSet.add(id);
                    if (card) card.classList.add("watched");
                } else {
                    this.watchedSet.delete(id);
                    if (card) card.classList.remove("watched");
                }

                this.saveWatchedToStorage();
                this.updateProgress();

                if (this.selectedStatus !== "ALL") {
                    this.renderWatchlist();
                }
            }
        });

        this.searchInput.addEventListener("input", (e) => {
            this.searchQuery = e.target.value;
            this.clearSearchBtn.style.display = this.searchQuery ? "block" : "none";
            this.renderWatchlist();
        });

        this.clearSearchBtn.addEventListener("click", () => {
            this.searchInput.value = "";
            this.searchQuery = "";
            this.clearSearchBtn.style.display = "none";
            this.renderWatchlist();
        });

        this.universeFilter.addEventListener("change", (e) => {
            this.selectedUniverse = e.target.value;
            this.renderWatchlist();
        });

        this.importanceFilter.addEventListener("change", (e) => {
            this.selectedImportance = e.target.value;
            this.renderWatchlist();
        });

        this.statusFilter.addEventListener("change", (e) => {
            this.selectedStatus = e.target.value;
            this.renderWatchlist();
        });

        this.resetFiltersBtn.addEventListener("click", () => {
            this.searchInput.value = "";
            this.searchQuery = "";
            this.selectedUniverse = "ALL";
            this.selectedImportance = "ALL";
            this.selectedStatus = "ALL";
            this.universeFilter.value = "ALL";
            this.importanceFilter.value = "ALL";
            this.statusFilter.value = "ALL";
            this.clearSearchBtn.style.display = "none";
            this.renderWatchlist();
        });

        this.resetBtn.addEventListener("click", () => {
            this.resetModal.classList.remove("hidden");
        });

        this.cancelResetBtn.addEventListener("click", () => {
            this.resetModal.classList.add("hidden");
        });

        this.confirmResetBtn.addEventListener("click", () => {
            this.watchedSet.clear();
            this.saveWatchedToStorage();
            this.renderWatchlist();
            this.updateProgress();
            this.resetModal.classList.add("hidden");
        });

        this.resetModal.addEventListener("click", (e) => {
            if (e.target === this.resetModal) {
                this.resetModal.classList.add("hidden");
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.app = new WatchlistApp();
});
