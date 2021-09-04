const animalesApi = (() => {

    const url = "http://127.0.0.1:5500/animales.json";
    const getData = async () => {

        const res = await fetch(url);
        const data = await res.json();
        
        console.log(data);
        return data;

    }

    return { getData };
})();
 
export default animalesApi

