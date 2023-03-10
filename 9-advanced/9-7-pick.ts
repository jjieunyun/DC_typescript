{
  /**
   * ๐ก๊ธฐ์กด์ type์์ ์ํ๋ ์์ฑ๊ณผ value๋ง ๋ฝ์์ ๋ง๋ค ์์๋ค.
   */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  //โ๏ธ๋ฐ๋ก ์ฌ์ฉํ๋ ๊ฒ๋ณด๋ค ์๋์ฒ๋ผ type์ ๋ง๋ค์ด์ ์ฌ์ฌ์ฉ ํ๋ ๊ฒ์ด ๋ ์ข๋ค
  type VideoMetadata = Pick<Video, "id" | "title">;

  //๋น๋์ค์ ๋ชจ๋  data๋ฅผ return
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  //๋น๋์ค์ ๊ด๋ จ๋ ๊ฐ๋จํ ๋ฐ์ดํฐ๋ง return
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
