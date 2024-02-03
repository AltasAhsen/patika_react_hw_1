import axios from "axios";
export default async function getData(id) {
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
        // İstek başarılı olursa burası çalışır
        console.log('Başlık:', response.data);
      })
      .catch(error => {
        // İstek başarısız olursa burası çalışır
        console.error('Hata:', error);
      });

      await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => {
          // İstek başarılı olursa burası çalışır
          console.log('Başlık:', response.data);
        })
        .catch(error => {
          // İstek başarısız olursa burası çalışır
          console.error('Hata:', error);
        });
};
