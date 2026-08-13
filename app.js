/* ==========================================================================
   ROAD TO DOOMSDAY — ULTIMATE MARVEL MULTIVERSE WATCHLIST APPLICATION
   105 TITLES COMPLETE DATASET ALIGNED TO RECOMMENDED SEQUENCE
   ========================================================================== */

const MARVEL_ROADMAP = [
    // MCU — INFINITY SAGA (1 - 23)
    { id: "mcu_01", title: "Iron Man", year: 2008, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
    { id: "mcu_02", title: "The Incredible Hulk", year: 2008, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "OPTIONAL", poster: "https://www.movienewsletters.net/photos/277217R1.jpg" },
    { id: "mcu_03", title: "Iron Man 2", year: 2010, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://www.movienewsletters.net/photos/065116R1.jpg" },
    { id: "mcu_04", title: "Thor", year: 2011, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGEXK__Y9E5Q3-EwKu6NQZhKhuQxvu40QZ9VuoZM&usqp=CAE&s" },
    { id: "mcu_05", title: "Captain America: The First Avenger", year: 2011, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7XH31M9vVtKTR7qP7_DFXZgICfMFG-UyaurtP6c&usqp=CAE&s" },
    { id: "mcu_06", title: "The Avengers", year: 2012, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdit9qDcXXGGXQIA4307Y4yi3hm3sbDqzr89TghsI&usqp=CAE&s" },
    { id: "mcu_07", title: "Iron Man 3", year: 2013, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfe0gmtJFiJ8OednDUYjRnfvn2OaMZn2HEl5JY_o&usqp=CAE&s" },
    { id: "mcu_08", title: "Thor: The Dark World", year: 2013, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqGcD2p063fBY-3WkeTBGw6SlwS2UW_oqbFy1DC78&usqp=CAE&s" },
    { id: "mcu_09", title: "Captain America: The Winter Soldier", year: 2014, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://www.movienewsletters.net/photos/181326R1.jpg" },
    { id: "mcu_10", title: "Guardians of the Galaxy", year: 2014, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://contentserver.com.au/assets/516361_p10108283_p_v8_ak.jpg" },
    { id: "mcu_11", title: "Avengers: Age of Ultron", year: 2015, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://www.movienewsletters.net/photos/183976R1.jpg" },
    { id: "mcu_12", title: "Ant-Man", year: 2015, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://www.movienewsletters.net/photos/208057R1.jpg" },
    { id: "mcu_13", title: "Captain America: Civil War", year: 2016, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://contentserver.com.au/assets/511728_p10989225_p_v8_ak.jpg" },
    { id: "mcu_14", title: "Doctor Strange", year: 2016, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://contentserver.com.au/assets/491602_p11214341_p_v8_ap.jpg" },
    { id: "mcu_15", title: "Guardians of the Galaxy Vol. 2", year: 2017, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://contentserver.com.au/assets/523718_p11714883_p_v8_ab.jpg" },
    { id: "mcu_16", title: "Spider-Man: Homecoming", year: 2017, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qMMRn-cQjaV4yLdDu-8DwFjDPcslkpW442272zBQq70aORhc" },
    { id: "mcu_17", title: "Thor: Ragnarok", year: 2017, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FUUtxQRnUSbCnhmWv-n4vCuDkJXHxZ5qRHIpI4aaEpnUCfuc" },
    { id: "mcu_18", title: "Black Panther", year: 2018, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg" },
    { id: "mcu_19", title: "Avengers: Infinity War", year: 2018, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE2vwxy5KaCu7cRuYYdgNdQKddux5OYgGwsPo0kqP_xzLnsDV" },
    { id: "mcu_20", title: "Ant-Man and the Wasp", year: 2018, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nVNusDzU0CMGDK8kaEm0t9JPua4sv3pTKazGkqE&usqp=CAE&s" },
    { id: "mcu_21", title: "Captain Marvel", year: 2019, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bDkDLq-_bteASakhnC1XYwlkErFuqcof7KMhFpRwVhCTh1Vo" },
    { id: "mcu_22", title: "Avengers: Endgame", year: 2019, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "ESSENTIAL", poster: "https://images.justwatch.com/poster/118339636/s718/avengers-endgame.jpg" },
    { id: "mcu_23", title: "Spider-Man: Far From Home", year: 2019, category: "MCU_INFINITY", categoryName: "MCU — Infinity Saga", part: "MCU — INFINITY SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjeW3OAfcDjUwm7fCNqdIEiE9dLjKXJY6CQ2Cjky-ri-pbVik" },

    // MCU — MULTIVERSE SAGA (24 - 38)
    { id: "mcu_24", title: "WandaVision", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1iKfyvDPK_urwo6XRhgwQ4v1y_ksQyUz8fhbLBHAAGXi6FWpZ" },
    { id: "mcu_25", title: "Loki — Season 1", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfNvCITmqMtQcWb6dB02_fw9QUwZPVHTHJx6m3jRasA&s=10" },
    { id: "mcu_26", title: "What If...? — Season 1", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://cdn.marvel.com/content/2x/whatif_lob_crd_01.jpg" },
    { id: "mcu_27", title: "Spider-Man: No Way Home", year: 2021, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
    { id: "mcu_28", title: "Doctor Strange in the Multiverse of Madness", year: 2022, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV" },
    { id: "mcu_29", title: "Loki — Season 2", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUm3FGGiFmwRs1DX3Q6jVZ3vozsAT3xw3T61iOpn0bw&s=10" },
    { id: "mcu_30", title: "Ant-Man and the Wasp: Quantumania", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYyaCMGIDqOrnfFiXD5Wj3--gOX6aYjvtE-DKc3ym6Wyr_UQqH" },
    { id: "mcu_31", title: "Guardians of the Galaxy Vol. 3", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTslskXBSMy0kAhcDsCHmf2KmNMgva17TaGU2W59Sq-CLgibiIw" },
    { id: "mcu_32", title: "The Marvels", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFR6mH9YM72sb456o7jrEcSDP5vLJ8Isst6HasyWRWInFnFajP" },
    { id: "mcu_33", title: "What If...? — Season 2", year: 2023, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4N1hP22ma7q2SucCG4QvZSo85CR2y7xFNjPTyAHcoIw&s=10" },
    { id: "mcu_34", title: "What If...? — Season 3", year: 2024, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLt27VBSPrD_gRWArHtEzU0d_sn5pgde98haUJPfysA&s=10" },
    { id: "mcu_35", title: "Deadpool & Wolverine", year: 2024, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
    { id: "mcu_36", title: "Agatha All Along", year: 2024, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "IMPORTANT", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtq3dwDkye1Sp8l1RFF1hADFdvlTj6fwCX5QpuBAK-hzIh8-oW" },
    { id: "mcu_37", title: "The Fantastic Four: First Steps", year: 2025, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMUPK6YXNyidUoSQ4YLMJS35mKK_gm2Qz8OMmjqmvSJquWBOmM" },
    { id: "mcu_38", title: "Spider-Man: Brand New Day", year: 2026, category: "MCU_MULTIVERSE", categoryName: "MCU — Multiverse Saga", part: "MCU — MULTIVERSE SAGA", importance: "ESSENTIAL", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKwQ9v6MpR6BJXg0-4V-N6QecM6tGI-eJ-4dx2aG1ti6HQGJcw" },

    // MCU — IMPORTANT SUPPORTING STORIES (39 - 52)
    { id: "supp_39", title: "Black Widow", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxnnpUHDu-N4JFDV1rTDX6gOoSFFYYAwaWZYi4oF5_sgq7afv" },
    { id: "supp_40", title: "The Falcon and the Winter Soldier", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlMkrdoq5aB2v1h-I3ucPBv9cSDEn-8ndlLnosdT9gSYR9SaTx" },
    { id: "supp_41", title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSE1tl-EYpaW6yDtmxsSsL9Wl_SRDK5PNJ0bCMBnvSAabEYKitf" },
    { id: "supp_42", title: "Eternals", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZBNOF324-MHMcNrSD8mFRBD3eEfj5lfVT69NMC16cFxLH0iku" },
    { id: "supp_43", title: "Hawkeye", year: 2021, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFTrRPv8tjdm2BiWQNWjuyKmc9nvRJWJnAqjwfEM5Ms-IQPHBC" },
    { id: "supp_44", title: "Moon Knight", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQD9oofZigR9k8YOORO8Yf53EZ54emeUekyiTt5ohBQIYZM7M4q" },
    { id: "supp_45", title: "Ms. Marvel", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThAvO-U2ayphXb-0RmCfwV24Tq3_7MnZKlOsZb0lxe-py3OIMw" },
    { id: "supp_46", title: "Thor: Love and Thunder", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHXV5at6mvLIF852fvIA5jeUi6bVYs8swuCPUCRWdRxWp0sr5Q" },
    { id: "supp_47", title: "Black Panther: Wakanda Forever", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzNzI5w3iKM-KdasCDvlOEUgD2ojlf7IW5b-e3tqFmhW2JRSCz" },
    { id: "supp_48", title: "She-Hulk: Attorney at Law", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7IHDYK6j6jXB-fL7t29KTmhQ25QeomqG0_ikmQCZlEOjHNiZe" },
    { id: "supp_49", title: "Werewolf by Night", year: 2022, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3SWQsMI3hjlyyzJQL9A2XwPgv9Z1gIubDns7TiA8Ug&s=10" },
    { id: "supp_50", title: "Secret Invasion", year: 2023, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjBub9brWuIp8QyJmbXLdereFtw5VCgEn7IKjTQBLEyJgRYAf8" },
    { id: "supp_51", title: "Echo", year: 2024, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "OPTIONAL", poster: "https://xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/SERIES/690e0b9b2dda7d51bf5b5694/images/PORTRAIT/1650078-v-02579e161274" },
    { id: "supp_52", title: "Daredevil: Born Again — Season 1", year: 2025, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXr6bWwab8ofnt6NYxsBlI_GXrC0mlkeVM38VoRS_IQ&s" },
    { id: "supp_53", title: "Daredevil: Born Again — Season 2", year: 2026, category: "MCU_SUPPORTING", categoryName: "MCU — Supporting Stories", part: "MCU — IMPORTANT SUPPORTING STORIES", importance: "IMPORTANT", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrBwzx-PDiM4rHC0HTlzQyV2GL-iIrOgpWn3Xlc3yQF79GNJI7" },

    // 🧬 X-MEN / FOX UNIVERSE (54 - 65)
    { id: "xmen_54", title: "X-Men", year: 2000, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZFfrTsZlK6LvSO8F24l-QoeR3mwgmhhu7GVVzj-f6TFjx-ju3bDZtdYHQs1Vx_ymA9vaIA&s=10" },
    { id: "xmen_55", title: "X2: X-Men United", year: 2003, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9zzpTGFzl7U7roMIl_Qd286VL3MPvpT3QmDCoQhWYvHaoAZ_KC4RjooGgP-AnWmFf-6MCA&s=10" },
    { id: "xmen_56", title: "X-Men: The Last Stand", year: 2006, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZb7hzCUktSZfvKOcm5a2DUJzk5ygUFzMWpMBYjcC6ZcxB5gfZomd9ivS_oxvYkB0moc8sLw&s=10" },
    { id: "xmen_57", title: "X-Men Origins: Wolverine", year: 2009, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__nfxTbLi0E82H2wlsgmKUcz01UjT0g-oKiP_CxTkyqCCNZpoRiSA71cidz0NPtrNG3gQ&s=10" },
    { id: "xmen_58", title: "X-Men: First Class", year: 2011, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYWLIU_2Ipl1hqH8DYjjE7fomaI-Mq9u7ERhUFj0obDoidyG0-5rzalP2qiAmucOOLz14&s=10" },
    { id: "xmen_59", title: "The Wolverine", year: 2013, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aPHvm47OxqFLP9DwTsIn_Udn2jEHA2OB89xteGna-3ohfQWRGXLHoLtVEmxzK3VCHlTk&s=10" },
    { id: "xmen_60", title: "X-Men: Days of Future Past", year: 2014, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStszmZomH6gJo1AIQwcxxzivavZu_5EuCnvu6RvFWoESoryF4skEkt35NgJIyEQITxPIRE&s=10" },
    { id: "xmen_61", title: "Deadpool", year: 2016, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTY4livrpwdEtDEGSuSG3MtRdyg2E3qd61De_v7YZTXDikNmmE1OBnOenfmDHgaQhRnBxrQ&s=10" },
    { id: "xmen_62", title: "X-Men: Apocalypse", year: 2016, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHG3__U3cxLmxtctAgE8XFLnm75wAEXGcl5U_GvgUso7x9Zuo7sfdWqNcbIcK2QoI6e1huQ&s=10" },
    { id: "xmen_63", title: "Logan", year: 2017, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzagexATpW-fEntD1LogsP-ClhanXEUEWND0qMZRJKLCvk_57aHWAltodGx1zzP8_AhVwzGQ&s=10" },
    { id: "xmen_64", title: "Deadpool 2", year: 2018, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAW37Os5pvBHl6HnfKgT-SFvmkoUPcYaGvsFaPxQ-EuJEdAttGTJFGXzpdulz2qcCnmil8A&s=10" },
    { id: "xmen_65", title: "Dark Phoenix", year: 2019, category: "XMEN_FOX", categoryName: "🧬 X-Men / Fox Universe", part: "🧬 X-MEN / FOX UNIVERSE", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSd0-1-NpNWz9-3XmM04kF1sqXeI0ujqFsK4kuHsr-BeobsyPSKdjhZqDbnCJ_YfWZWYOlIg&s=10" },

    // 🧪 FANTASTIC FOUR — OTHER UNIVERSES (66 - 68)
    { id: "f4_66", title: "Fantastic Four", year: 2005, category: "FANTASTIC_FOUR", categoryName: "🧪 Fantastic Four", part: "🧪 FANTASTIC FOUR", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRGXP2N9X5mKJquo3Wojn9UZQAXrWdiMVp7CHx6fI29nCf8TJoozyesfyfSNI8AvQK7P3xw&s=10" },
    { id: "f4_67", title: "Fantastic Four: Rise of the Silver Surfer", year: 2007, category: "FANTASTIC_FOUR", categoryName: "🧪 Fantastic Four", part: "🧪 FANTASTIC FOUR", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynd0OwRk9-1-iby-JA2wG-6g_2xqepEJyt-4dUOzLRexZaOWFxSKR4_G78voZqGqoAAUg&s=10" },
    { id: "f4_68", title: "Fantastic Four", year: 2015, category: "FANTASTIC_FOUR", categoryName: "🧪 Fantastic Four", part: "🧪 FANTASTIC FOUR", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08-C9fQfhBW1utTh6DluttA0rbRZN9M5i4eTGRe6SsY5xITzIH0dFVgDVL8byo9an1hZe&s=10" },

    // 🕷️ SPIDER-MAN UNIVERSES (69 - 73)
    { id: "tobey_69", title: "Spider-Man", year: 2002, category: "SPIDERMAN_UNIVERSES", categoryName: "🕷️ Spider-Man Universes", part: "🕷️ SPIDER-MAN UNIVERSES", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQy6m9RNegX--QNf6H2d-pCDxbh7yoEy2Ms-3QQShvw&s=10" },
    { id: "tobey_70", title: "Spider-Man 2", year: 2004, category: "SPIDERMAN_UNIVERSES", categoryName: "🕷️ Spider-Man Universes", part: "🕷️ SPIDER-MAN UNIVERSES", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyk9-stiTwTNaIKqGsiaMYnjqd96p4G8Bv6ZrBqdKwrg&s" },
    { id: "tobey_71", title: "Spider-Man 3", year: 2007, category: "SPIDERMAN_UNIVERSES", categoryName: "🕷️ Spider-Man Universes", part: "🕷️ SPIDER-MAN UNIVERSES", importance: "ESSENTIAL", poster: "https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: "andrew_72", title: "The Amazing Spider-Man", year: 2012, category: "SPIDERMAN_UNIVERSES", categoryName: "🕷️ Spider-Man Universes", part: "🕷️ SPIDER-MAN UNIVERSES", importance: "ESSENTIAL", poster: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg" },
    { id: "andrew_73", title: "The Amazing Spider-Man 2", year: 2014, category: "SPIDERMAN_UNIVERSES", categoryName: "🕷️ Spider-Man Universes", part: "🕷️ SPIDER-MAN UNIVERSES", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cbwj9BDZO8O7Q88qAXUr3Rkjptk4Acvug7umOrKgm7n71sS_m6tbuee2Grj_Xs0z0yv3-g&s=10" },

    // 🕸️ SONY SPIDER-MAN UNIVERSE (74 - 79)
    { id: "sony_74", title: "Venom", year: 2018, category: "SONY_SPIDERMAN", categoryName: "🕸️ Sony Spider-Man Universe", part: "🕸️ SONY SPIDER-MAN UNIVERSE", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAV161vHVXamqMrcrD63a116fbv_B3icvCM7XVpK2S2U3vNGKeat6KFnEcyQxH9Zmt8eE&s=10" },
    { id: "sony_75", title: "Venom: Let There Be Carnage", year: 2021, category: "SONY_SPIDERMAN", categoryName: "🕸️ Sony Spider-Man Universe", part: "🕸️ SONY SPIDER-MAN UNIVERSE", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQ4Js0KosQW3Fg7JEAdtf4Ux9iHcD1_DE79I-_sgJvflR5jLNvgxy-Gyob-mA6x-e_zI&s=10" },
    { id: "sony_76", title: "Morbius", year: 2022, category: "SONY_SPIDERMAN", categoryName: "🕸️ Sony Spider-Man Universe", part: "🕸️ SONY SPIDER-MAN UNIVERSE", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvG3LAJgN-EBfez74uYfxwMRD3jOAmgA5D-NUCrm4EBkfI8je7wdFj9igchBUudejWP7fCGQ&s=10" },
    { id: "sony_77", title: "Madame Web", year: 2024, category: "SONY_SPIDERMAN", categoryName: "🕸️ Sony Spider-Man Universe", part: "🕸️ SONY SPIDER-MAN UNIVERSE", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZw_UEsuvgsYUhI1fCMRQTrTtk0eeZuRX2n9kG1cXwFCWhlRVZpWYGvl_vl1-OGbqJoLJ&s=10" },
    { id: "sony_78", title: "Kraven the Hunter", year: 2024, category: "SONY_SPIDERMAN", categoryName: "🕸️ Sony Spider-Man Universe", part: "🕸️ SONY SPIDER-MAN UNIVERSE", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDofsc2xdp0KXzyzh9CDXBtwT0_c2o1PzIZGFyzEwVn-De6uLLUsOAwgSPGVWx1fcQlt9RpA&s=10" },
    { id: "sony_79", title: "Venom: The Last Dance", year: 2024, category: "SONY_SPIDERMAN", categoryName: "🕸️ Sony Spider-Man Universe", part: "🕸️ SONY SPIDER-MAN UNIVERSE", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr18mDJuzZpx_PYZDl4iKYhZPp5H_NE7YLMUIxAs8B92IfkHlzvNaMmRTvU2_RjaRkj0T&s=10" },

    // 🎨 ANIMATED / MULTIVERSE (80 - 83)
    { id: "sverse_80", title: "Spider-Man: Into the Spider-Verse", year: 2018, category: "ANIMATED_OTHER", categoryName: "🎨 Animated / Multiverse", part: "🎨 MARVEL ANIMATED / MULTIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgvlqgQf_w4ZiaZY5tcqP9l5tR22e3XOsLJr4F9S_Q0ZQ5luvjw54b12ogsFE9qhkptmIqg&s=10" },
    { id: "sverse_81", title: "Spider-Man: Across the Spider-Verse", year: 2023, category: "ANIMATED_OTHER", categoryName: "🎨 Animated / Multiverse", part: "🎨 MARVEL ANIMATED / MULTIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHINt-1ZsO4h9cXvdMhasTbVlPRdUpZy0rb5WFQVws14TQugbNs_Zrj3Pw-N5hE7HDnu_8&s=10" },
    { id: "anim_82", title: "X-Men '97 — Season 1", year: 2024, category: "ANIMATED_OTHER", categoryName: "🎨 Animated / Multiverse", part: "🎨 MARVEL ANIMATED / MULTIVERSE", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uegBH-xut32otTxF_dbg7H-_KE5Q1LNQXn5cNApEhWFgZUAJ" },
    { id: "anim_83", title: "Your Friendly Neighborhood Spider-Man — Season 1", year: 2025, category: "ANIMATED_OTHER", categoryName: "🎨 Animated / Multiverse", part: "🎨 MARVEL ANIMATED / MULTIVERSE", importance: "IMPORTANT", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRG8MJKGpfbI3Tmp5k9cvS_csQlfYjfUChuAihdKdgAacj2f3e2" },
    { id: "anim_84", title: "Marvel Zombies — Season 1", year: 2025, category: "ANIMATED_OTHER", categoryName: "🎨 Animated / Multiverse", part: "🎨 MARVEL ANIMATED / MULTIVERSE", importance: "IMPORTANT", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRd8ZWwwgtwCDjwNn7_00EJQ6v1xNvH2r1JVfZ4feZz5HXRmWyh" },

    // 📺 MARVEL TELEVISION / DEFENDERS (85 - 97)
    { id: "tv_85", title: "Daredevil — Season 1", year: 2015, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "IMPORTANT", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKjfQlx9oRHQ52c05qMv6UUY8zGfH0SwReB94-JktVE3JmPNOK" },
    { id: "tv_86", title: "Jessica Jones — Season 1", year: 2015, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VU95LhwYUx-8pXqiwtu5V_xkjAR66N76SUcc2tHuiyT1sZHg" },
    { id: "tv_87", title: "Luke Cage — Season 1", year: 2016, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRvDxG7qqISXtUmpism7NuDRQHZPMQUoEvp-t_cCeU8dh9NLyMl" },
    { id: "tv_88", title: "Iron Fist — Season 1", year: 2017, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbsedhjJSEs1JT_Rbjg06wi4avzej5XAn6E3m6l-BQjI-E_3Yn" },
    { id: "tv_89", title: "The Defenders", year: 2017, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Ojk6GgpjHKueORvtt_1BrQQxfNvD0mHgmO1UKOsvvHMZnJnUGoJgR7WeuZ2e06K_Vtpa&s=10" },
    { id: "tv_90", title: "The Punisher — Season 1", year: 2017, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://upload.wikimedia.org/wikipedia/en/2/21/The_Punisher_season_1_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
    { id: "tv_91", title: "Daredevil — Season 2", year: 2016, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFckNI4-IzCO00atZkWbix2JnsDzILA6isKscjpAY3fQ&s=10" },
    { id: "tv_92", title: "Luke Cage — Season 2", year: 2018, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fa/Luke_Cage_Season_Season_2_Poster.jpg/revision/latest?cb=20180708204756" },
    { id: "tv_93", title: "Iron Fist — Season 2", year: 2018, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/Iron_Fist_season_2_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
    { id: "tv_94", title: "The Punisher — Season 2", year: 2019, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAuJOgMRn9D8-bzM4XjIdvSXh7vr5TRkRWGwi6oS3KQ&s=10" },
    { id: "tv_95", title: "Daredevil — Season 3", year: 2018, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "IMPORTANT", poster: "https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_.jpg" },
    { id: "tv_96", title: "Jessica Jones — Season 2", year: 2018, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://i.redd.it/unsv3mqgkxhe1.jpeg" },
    { id: "tv_97", title: "Jessica Jones — Season 3", year: 2019, category: "MARVEL_TELEVISION", categoryName: "📺 Marvel Television / Defenders", part: "📺 MARVEL TELEVISION / DEFENDERS", importance: "OPTIONAL", poster: "https://d32qys9a6wm9no.cloudfront.net/images/tvs/poster/2c/0c3b77806a34debf1cdd188921d40a82_300x442.jpg?t=1636148895" },

    // 🌀 OTHER MARVEL UNIVERSES (98 - 102)
    { id: "other_98", title: "Legion — Season 1", year: 2017, category: "ANIMATED_OTHER", categoryName: "🌀 Other Marvel Universes", part: "🌀 OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Legion_season_1_poster.jpg/250px-Legion_season_1_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { id: "other_99", title: "Legion — Season 2", year: 2018, category: "ANIMATED_OTHER", categoryName: "🌀 Other Marvel Universes", part: "🌀 OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FvlhbYsIDk7VUhoc3NMCTbfCwXdr2EZyW8S0IqX12A&s=10" },
    { id: "other_100", title: "Legion — Season 3", year: 2019, category: "ANIMATED_OTHER", categoryName: "🌀 Other Marvel Universes", part: "🌀 OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Legion_season_3_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
    { id: "other_101", title: "The Gifted — Season 1", year: 2017, category: "ANIMATED_OTHER", categoryName: "🌀 Other Marvel Universes", part: "🌀 OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://resizing.flixster.com/BPBcpirRfNwU5p9A7fXtyyhd7jU=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14136089_b_v12_ac.jpg" },
    { id: "other_102", title: "The Gifted — Season 2", year: 2018, category: "ANIMATED_OTHER", categoryName: "🌀 Other Marvel Universes", part: "🌀 OTHER MARVEL UNIVERSES", importance: "OPTIONAL", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/The_Gifted_season_2.jpg/250px-The_Gifted_season_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },

    // 🚀 EXTRA MULTIVERSE PREPARATION (103 - 106)
    { id: "extra_103", title: "Captain America: Brave New World", year: 2025, category: "ANIMATED_OTHER", categoryName: "🚀 Extra Multiverse Preparation", part: "🚀 EXTRA MULTIVERSE PREPARATION", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxIkn7_0YU05hQxPSNNivqBRingNRFQNUjiAsyrs2L04G2MYyqmDGGHSCESudQ1Ju8FLamg&s=10" },
    { id: "extra_104", title: "Thunderbolts*", year: 2025, category: "ANIMATED_OTHER", categoryName: "🚀 Extra Multiverse Preparation", part: "🚀 EXTRA MULTIVERSE PREPARATION", importance: "ESSENTIAL", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwW25lnlRJI4kiwVOcIIzSpq95EpDLajAe4WEeZ-vcbyozX-IU4rXlm0UB623pRccoGGz&s=10" },
    { id: "extra_105", title: "Ironheart", year: 2025, category: "ANIMATED_OTHER", categoryName: "🚀 Extra Multiverse Preparation", part: "🚀 EXTRA MULTIVERSE PREPARATION", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKL__hb8AvRJYNMPduJEp_ZBs_EfbSatpKTeTypwKP8DdfItHpoOW0x2BmUW_vO_cQG05&s=10" },
    { id: "extra_106", title: "Wonder Man", year: 2026, category: "ANIMATED_OTHER", categoryName: "🚀 Extra Multiverse Preparation", part: "🚀 EXTRA MULTIVERSE PREPARATION", importance: "IMPORTANT", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24CYKInu0BD4GObv_qTrzdWEgqTju1RYxwUI-yWh3WAxU1egezZ2m6AaUS-X2kmt4uZfVeg&s=10" }
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

        // Share Card elements
        this.shareBtn = document.getElementById("shareBtn");
        this.shareModal = document.getElementById("shareModal");
        this.closeShareModalBtn = document.getElementById("closeShareModalBtn");
        this.shareCardInner = document.getElementById("shareCardInner");
        this.flipCardBtn = document.getElementById("flipCardBtn");
        this.downloadCardBtn = document.getElementById("downloadCardBtn");
        this.copyShareBtn = document.getElementById("copyShareBtn");
        this.copyToast = document.getElementById("copyToast");
    }

    // LIVE COUNTDOWN TIMER TO DECEMBER 18, 2026 WITH MONTHS, DAYS, HOURS, MINUTES, SECONDS & AUTOPLAY AUDIO
    initCountdown() {
        const targetDate = new Date("2026-12-18T00:00:00Z");
        this.soundEnabled = true;
        const clockAudio = document.getElementById("clockAudio");

        // Web Audio fallback oscillator for tick sync
        const playOscillatorTick = () => {
            if (!this.soundEnabled) return;
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                if (!this.audioCtx) {
                    this.audioCtx = new AudioCtx();
                }
                if (this.audioCtx.state === "suspended") {
                    this.audioCtx.resume();
                }
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(900, this.audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(140, this.audioCtx.currentTime + 0.035);
                gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.035);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start();
                osc.stop(this.audioCtx.currentTime + 0.035);
            } catch (e) {
                console.log("Oscillator tick error", e);
            }
        };

        // Instant playback helper
        const playSoundNow = () => {
            if (!this.soundEnabled) return;
            if (clockAudio) {
                const playPromise = clockAudio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // If autoplay blocked by browser policy, play synth tick instead
                        playOscillatorTick();
                    });
                }
            } else {
                playOscillatorTick();
            }
        };

        // Try playing sound immediately on page load
        playSoundNow();

        // Also trigger sound on any user interaction (mousemove, scroll, touch, click, keydown)
        const unlockAudio = () => {
            if (this.soundEnabled) {
                playSoundNow();
            }
            window.removeEventListener("pointerdown", unlockAudio);
            window.removeEventListener("mousemove", unlockAudio);
            window.removeEventListener("scroll", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
            window.removeEventListener("keydown", unlockAudio);
            window.removeEventListener("click", unlockAudio);
        };

        window.addEventListener("pointerdown", unlockAudio, { once: true });
        window.addEventListener("mousemove", unlockAudio, { once: true });
        window.addEventListener("scroll", unlockAudio, { once: true });
        window.addEventListener("touchstart", unlockAudio, { once: true });
        window.addEventListener("keydown", unlockAudio, { once: true });
        window.addEventListener("click", unlockAudio, { once: true });

        const soundBtn = document.getElementById("soundToggleBtn");
        const soundIcon = document.getElementById("soundIcon");
        const soundText = document.getElementById("soundText");

        if (soundBtn) {
            soundBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                this.soundEnabled = !this.soundEnabled;
                if (this.soundEnabled) {
                    soundIcon.textContent = "🔊";
                    soundText.textContent = "Sound: ON";
                    soundBtn.style.borderColor = "var(--accent-green)";
                    soundBtn.style.color = "var(--accent-green)";
                    soundBtn.style.background = "rgba(0, 230, 118, 0.18)";
                    playSoundNow();
                } else {
                    soundIcon.textContent = "🔇";
                    soundText.textContent = "Sound: OFF";
                    soundBtn.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    soundBtn.style.color = "rgba(255, 255, 255, 0.5)";
                    soundBtn.style.background = "rgba(255, 255, 255, 0.05)";
                    if (clockAudio) clockAudio.pause();
                }
            });
        }

        const updateTimer = () => {
            const now = new Date();
            if (now >= targetDate) {
                document.getElementById("months").textContent = "00";
                document.getElementById("days").textContent = "00";
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";
                return;
            }

            // Accurate MONTHS, DAYS, HOURS, MINUTES, SECONDS breakdown
            let targetYear = targetDate.getUTCFullYear();
            let targetMonth = targetDate.getUTCMonth();
            
            let currentYear = now.getUTCFullYear();
            let currentMonth = now.getUTCMonth();
            
            let months = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);
            
            let tempDate = new Date(now);
            tempDate.setUTCMonth(tempDate.getUTCMonth() + months);
            
            if (tempDate > targetDate) {
                months--;
                tempDate = new Date(now);
                tempDate.setUTCMonth(tempDate.getUTCMonth() + months);
            }

            let diffMs = targetDate - tempDate;
            let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            diffMs -= days * (1000 * 60 * 60 * 24);

            let hours = Math.floor(diffMs / (1000 * 60 * 60));
            diffMs -= hours * (1000 * 60 * 60);

            let minutes = Math.floor(diffMs / (1000 * 60));
            diffMs -= minutes * (1000 * 60);

            let seconds = Math.floor(diffMs / 1000);

            document.getElementById("months").textContent = String(months).padStart(2, '0');
            document.getElementById("days").textContent = String(days).padStart(2, '0');
            document.getElementById("hours").textContent = String(hours).padStart(2, '0');
            document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
            document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

            playSoundNow();
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

                // YouTube Trailer Search Query
                const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + ' official trailer')}`;

                // Clean Google Where to Watch Search Query without "India legal streaming"
                const streamingUrl = `https://www.google.com/search?q=${encodeURIComponent(item.title + ' where to watch')}`;

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
                        <div class="poster-container">
                            <img src="${item.poster}" alt="${item.title} poster" class="poster-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="poster-fallback-badge" style="display: none;">
                                <span class="fallback-marvel">MARVEL</span>
                                <span class="fallback-title">${item.title.substring(0, 10)}</span>
                            </div>
                        </div>
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
                    <div class="card-actions">
                        <a href="${trailerUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-trailer" title="Watch official trailer on YouTube">
                            🎬 Watch Trailer
                        </a>
                        <a href="${streamingUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-where-to-watch" title="Search where to watch">
                            🔎 Where to Watch
                        </a>
                    </div>
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

    // UPDATE SHARE CARD DATA
    updateShareCardData() {
        const total = MARVEL_ROADMAP.length; // 105
        const watched = this.watchedSet.size;
        const remaining = total - watched;
        const percentage = Math.round((watched / total) * 100);

        let rankTitle = "RECRUIT";
        let rankIcon = "🚀";

        if (watched === 0) {
            rankTitle = "RECRUIT";
            rankIcon = "🚀";
        } else if (watched < 25) {
            rankTitle = "MULTIVERSE INITIATE";
            rankIcon = "🍿";
        } else if (watched < 55) {
            rankTitle = "MULTIVERSE EXPLORER";
            rankIcon = "🌀";
        } else if (watched < 80) {
            rankTitle = "X-MEN & AVENGERS VETERAN";
            rankIcon = "🧬";
        } else if (watched < 105) {
            rankTitle = "MULTIVERSE MASTER";
            rankIcon = "🕷️";
        } else {
            rankTitle = "DOOMSDAY READY";
            rankIcon = "👑";
        }

        const months = document.getElementById("months") ? document.getElementById("months").textContent : "04";
        const days = document.getElementById("days") ? document.getElementById("days").textContent : "12";

        document.getElementById("shareHeadline").textContent = watched === 105 ? "READY FOR DOOMSDAY! 👑" : "ON MY WAY TO DOOMSDAY! 🍿";
        document.getElementById("shareRankIcon").textContent = rankIcon;
        document.getElementById("shareRankTitle").textContent = rankTitle;
        document.getElementById("shareWatchedNum").textContent = watched;
        document.getElementById("shareRemainingNum").textContent = remaining;
        document.getElementById("sharePercentText").textContent = `${percentage}%`;
        document.getElementById("shareProgressFill").style.width = `${percentage}%`;
        document.getElementById("shareCountdownSummary").textContent = `Counting down: ${months}m ${days}d to Dec 18, 2026`;

        // Formatted clipboard text summary
        const copyText = `🎬 MY ROAD TO DOOMSDAY PROGRESS 🍿\n` +
                         `━━━━━━━━━━━━━━━━━━━━━\n` +
                         `👑 Rank: ${rankIcon} ${rankTitle}\n` +
                         `🍿 Watched: ${watched} / ${total} Movies & Shows (${percentage}% Complete)\n` +
                         `⏳ Remaining: ${remaining} Movies Left\n` +
                         `📅 Avengers: Doomsday — Dec 18, 2026\n` +
                         `━━━━━━━━━━━━━━━━━━━━━\n` +
                         `🌐 Track your journey: https://road-to-doomsday-five.vercel.app/`;

        const previewEl = document.getElementById("shareCopyPreview");
        if (previewEl) {
            previewEl.textContent = copyText;
        }
        this.shareCopyText = copyText;
    }

    // EVENT LISTENERS
    attachEventListeners() {
        // Share Progress Button click handler
        if (this.shareBtn) {
            this.shareBtn.addEventListener("click", () => {
                this.updateShareCardData();
                this.shareCardInner.classList.remove("flipped");
                this.shareModal.classList.remove("hidden");
            });
        }

        if (this.closeShareModalBtn) {
            this.closeShareModalBtn.addEventListener("click", () => {
                this.shareModal.classList.add("hidden");
            });
        }

        if (this.shareModal) {
            this.shareModal.addEventListener("click", (e) => {
                if (e.target === this.shareModal) {
                    this.shareModal.classList.add("hidden");
                }
            });
        }

        if (this.flipCardBtn) {
            this.flipCardBtn.addEventListener("click", () => {
                this.shareCardInner.classList.toggle("flipped");
            });
        }

        if (this.downloadCardBtn) {
            this.downloadCardBtn.addEventListener("click", () => {
                const isFlipped = this.shareCardInner.classList.contains("flipped");
                const cardElement = isFlipped ? document.getElementById("shareCardBack") : document.getElementById("shareCardFront");

                if (window.html2canvas && cardElement) {
                    // Create an un-transformed clone to prevent html2canvas 3D rotation mirroring bug
                    const clone = cardElement.cloneNode(true);
                    clone.style.transform = "none";
                    clone.style.webkitTransform = "none";
                    clone.style.position = "fixed";
                    clone.style.left = "-9999px";
                    clone.style.top = "0";
                    clone.style.width = "440px";
                    clone.style.height = "660px";
                    clone.style.zIndex = "-9999";
                    document.body.appendChild(clone);

                    window.html2canvas(clone, {
                        backgroundColor: "#060b08",
                        scale: 3,
                        useCORS: true
                    }).then(canvas => {
                        document.body.removeChild(clone);
                        const link = document.createElement("a");
                        link.download = `doomsday-progress-card-${isFlipped ? "back" : "front"}.png`;
                        link.href = canvas.toDataURL("image/png");
                        link.click();
                        
                        this.copyToast.textContent = "Card Image Downloaded! 📥✨";
                        this.copyToast.classList.remove("hidden");
                        setTimeout(() => {
                            this.copyToast.classList.add("hidden");
                        }, 2200);
                    }).catch(err => {
                        if (document.body.contains(clone)) document.body.removeChild(clone);
                        console.error("Failed to save image", err);
                    });
                }
            });
        }

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

        const backToTopBtn = document.getElementById("backToTopBtn");
        if (backToTopBtn) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add("visible");
                } else {
                    backToTopBtn.classList.remove("visible");
                }
            });

            backToTopBtn.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.app = new WatchlistApp();
});
