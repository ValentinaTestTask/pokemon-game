import Header from './components/Header';

import Layout from './components/Layout';

import Footer from './components/Footer';

import bg from './assets/bg.jpg';

function App() {
  return (
    <>
      <Header title="This is title" descr="This is Description!" />
      <Layout title="Title" descr="Description!" urlBg={bg} />
      <Layout title="Title" descr="Description!" colorBg="yellow" />
      <Layout title="Title" descr="Description!" urlBg={bg} />
      <Footer />
    </>
  );
}    

export default App;
