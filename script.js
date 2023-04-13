const username = document.getElementById('search');
function fetchData() {  
  const query= `
    query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username
    submitStats: submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }
}
  `;
  
  fetch('http://leetcode.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'writable':'true',
    },
    body: JSON.stringify({ query })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}




