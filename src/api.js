export const getComments = async () => {
    return [
      // {
      //   id: "1",
      //   body: "First comment",
      //   username: "Aniket",
      //   userId: "1",
      //   parentId: null,
      //   createdAt: "2023-02-16T19:28:33.010+02:00",
      // },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36),
      body: text,
      parentId,
      userId: "1",
      username: "Aniket",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };