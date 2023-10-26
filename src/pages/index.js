import * as React from "react"
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Alert from "../components/Alert";

const IndexPage = () => {
    const [state, setState] = useState({
        started: false,
        result: -1,
        resultImage: 'question.svg'
    });

    const hands = ['hand-paper.svg', 'hand-rock.svg', 'hand-scissors.svg'];

    function play(selection) {
        let rnd = parseInt(Math.random() * (3));
        const resultsTable = [
            [2, 0, 1],
            [1, 2, 0],
            [0, 1, 2],
        ];
        setState((state) => ({
            ...state,
            resultImage: hands[rnd],
            result: resultsTable[rnd][selection]
        }));
    }

    return (
        <Layout>
            {state.started === true ?
                <main>
                    <img style={{margin: '5%'}} src={require(`../images/${state.resultImage}`).default}
                         width={'15%'} alt='result'/>
                    {state.result === -1 ?
                        <div className="list-group list-group-horizontal-sm text-center">
                            {[0, 1, 2].map((v,key) => <Button key={key} img={hands[v]} onClick={() => play(v)}></Button>)}
                        </div>
                        :
                        <>
                            {
                                state.result === 0 ? <Alert type={"alert-danger"}>You lose : (</Alert> :
                                    state.result === 1 ? <Alert type={"alert-success"}>You win!</Alert> :
                                        state.result === 2 && <Alert type={"alert-warning"}>Draw</Alert>
                            }
                            <button onClick={() =>
                                setState((state) => ({...state, resultImage: 'question.svg', result: -1}))
                            } type="button" className="btn btn-success">Again
                            </button>
                        </>
                    }
                </main>
                :
                <button className='btn btn-dark' onClick={() => setState((state) => ({...state, started: true}))}>
                    Start
                </button>
            }
        </Layout>
    );

}

export default IndexPage