import Head from 'next/head';

const Mycontainer = ({nametitle, keywords}) => {

return <>

<Head>

<meta keywords={ keywords}></meta>
<title>{nametitle} </title>



</Head>



</>


}

export default Mycontainer;