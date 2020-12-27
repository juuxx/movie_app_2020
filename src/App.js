function Food({fav}){
  return <h1>I like  {fav}</h1>
}


function App() {
  return <div>
          <h1>Hello</h1>
          <Food fav="kimchi"></Food>
          <Food fav="ramyeon"></Food>
          <Food fav="chicken"></Food>
          <Food fav="pizza"></Food>
        </div>
}

export default App;

//componet : html을 반환하는 함수
//js 와 html 사이의 이러한 조합을 jsx