const ELEMENT_ARROW         = document.querySelector('.arrow');
const ELEMENT_ARROW_INNER   = document.querySelector('.arrow-inner'); 

const startApplication = async function () {

    console.log('start...');
    setTimeout(() => {
        const scrollElement = document.querySelector('.search');
        scrollElement.scrollIntoView();
    }, 10)

    window.localStorage.setItem('from', 0);

    const from      = getUrlParameter('from');
    const limit     = getUrlParameter('limit');
    const catalogid = getUrlParameter('catalogid'); 
    const search    = getUrlParameter('search');
    const end       = getUrlParameter('end') || false;

    setInterval(async () => {
        
        const watchCount     = await getWatch(5178264021, catalogid);
        const lengthProducts = parseInt(await getCountProducts(catalogid));

        console.log(lengthProducts);
        console.log(watchCount);

        ELEMENT_ARROW_INNER.textContent = lengthProducts-watchCount;
        list.querySelectorAll('.products__item:not(.template)').forEach((block, index) => {
            try {
                if(isVisible(block)) {
                    if(parseInt(block.getAttribute('index')) > parseInt(watchCount)) {
                        setWatch(5178264021, catalogid, parseInt(block.getAttribute('index'))+1);
                    }
                }
            } catch(e) {
                console.log(e);
            }
            
        });

    }, 800);

    if(end != false) {
        const countProducts = await getCountProducts(catalogid);
        console.log(countProducts);
        await showProducts(countProducts-parseInt(limit), parseInt(limit), catalogid, search);
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
        return false;
    }

    await showProducts(from, limit, catalogid, search);
    document.documentElement.scrollTop = 0;

    

    return false;
}

function isVisible(elem) {
 
    let coords = elem.getBoundingClientRect();
   
    let windowHeight = document.documentElement.clientHeight;
   
    // верхний край элемента виден?
    let topVisible = coords.top > 0 && coords.top < windowHeight;
   
    // нижний край элемента виден?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
   
    return topVisible || bottomVisible;
  }

async function getWatch(userid, category) {
    const result = (await axios({
        method: 'GET',
        url: URL + 'get_watch',
        params: {
            category: category,
            userid: userid
        }
    })).data;

    return result;
}

async function setWatch(userid, category, count) {
    const result = (await axios({
        method: 'GET',
        url: URL + 'set_watch',
        params: {
            category: category,
            userid: userid,
            watch: count
        }
    })).data;

    return true;
}

ELEMENT_ARROW.addEventListener('click', () => {
    window.location.replace(
        window.location.href +
        '&' +
        `end=true`
    )
})

startApplication();