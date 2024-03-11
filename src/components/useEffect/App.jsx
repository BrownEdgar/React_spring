import {useState, useEffect} from 'react'
import './App.scss'

export default function App() {
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
            function getData(){
                fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
                .then(res => res.json())
                .then(data => setPosts(data))
        }
        getData()
    }, [])
    
    function deleteByID(id){
        const result = posts.filter(posts => {
            return posts.id !== id
        })
        setPosts(result)
    }

    const trueSort = () => {
        const completeTrue = [...posts];
        completeTrue .sort((a, b) => a .id> b.id ? 1 : -1);
        completeTrue .sort((a, b) => {
        if (a.completed === b.completed) {
            return 0;
        } else if (a.completed) {
            return -1;
        } else {
            return a.id > b.id ? 1 : -1;
        }
        });
        setPosts(completeTrue);
    };

    const falseSort = () => {
        const  falseSort = [...posts];
        console.log(falseSort);
        falseSort.sort((a, b) => a.id > b.id ? 1 : -1);
        falseSort.sort((a, b) => {
        if (a.completed === b.completed) {
            return 0;
        } else if (b.completed) {
            return -1;
        } else {
            return a.id > b.id ? 1 : -1;
        }
        });
        setPosts(falseSort);
    }

    return (
        <div>
            <h1>ToDo list </h1>
                <div className='Sort'>
                    <button onClick={trueSort} className='Sort__true'>Sort True</button>
                    <button onClick={falseSort} className='Sort__false'>Sort False</button>
                </div>
            <div className='Posts'>
                {
                    posts.map((elem) => {
                        return (
                            <div key={elem.id} className='Posts__item'>
                                <div className={elem.completed === true ? 'Posts__item-active' : 'Posts__item-nonActive'}>
                                    <span>{elem.id}</span>
                                    <h2>{elem.title}</h2>
                                    <button onClick={() => deleteByID(elem.id)}>&#10006;</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
