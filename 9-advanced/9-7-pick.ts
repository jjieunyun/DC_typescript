{
  /**
   * 💡기존의 type에서 원하는 속성과 value만 뽑아서 만들 수있다.
   */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  //❗️바로 사용하는 것보다 아래처럼 type을 만들어서 재사용 하는 것이 더 좋다
  type VideoMetadata = Pick<Video, "id" | "title">;

  //비디오의 모든 data를 return
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  //비디오와 관련된 간단한 데이터만 return
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
