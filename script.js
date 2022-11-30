let allData = [];
let myPosts = [
  {
    postID: 1,
    postTitle: "Post1",
    postBody: "Hello1",
  },
  {
    postID: 2,
    postTitle: "Post1",
    postBody: "Hello1",
  },
  {
    postID: 3,
    postTitle: "Post1",
    postBody: "Hello1",
  },
  {
    postID: 4,
    postTitle: "Post1",
    postBody: "Hello1",
  },
];
console.log(myPosts);

let myComments = [
  {
    commentID: 1,
    commentToPost: 2,
    commentBody: "comment to post 2",
  },
  {
    commentID: 2,
    commentToPost: 4,
    commentBody: "comment to post 4",
  },
  {
    commentID: 3,
    commentToPost: 1,
    commentBody: "comment to post 1",
  },
  {
    commentID: 4,
    commentToPost: 3,
    commentBody: "comment to post 3",
  },
];
console.log(myComments);

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(myPosts);
      resolve(myPosts);
    }, 3000);
  });
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(myComments);
      resolve(myComments);
    }, 4000);
  });
}

getPosts()
  .then((allPosts) => pushPosts(allPosts))
  .then(() => getComments())
  .then((allComments) => pushComments(allComments))
  .then(() => console.log(allData))
  .then(() => alert());

function pushPosts(postsToPush) {
  allData.push(postsToPush);
  return postsToPush;
}

function pushComments(commentsToPush) {
  allData.push(commentsToPush);
  return commentsToPush;
}

function alert() {
  //   allData.forEach((Element) => {
  //     document.body.innerHTML += JSON.stringify(Element);
  //   });
  let html = ``;
  allData[0].forEach((post) => {
    html += `<h1>${post.postTitle}</h1>`;
    allData[1].forEach((comment) => {
      if (comment.commentToPost == post.postID) {
        html += `<p>${comment.commentBody}</p>`;
      }
    });
  });

  document.body.innerHTML = html;
}
