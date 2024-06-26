import "./Ev.css"

export const EventPropagation =()=>{
    const handleGrandparent =()=>{
       console.log("GrandParent clicked");
    }

    const handleParentClick =()=>{
        console.log("Parent clicked")
    }

    const handleChildClick =(event)=>{
        console.log(event)
        event.stopPropagation();
        console.log("Child clicked")
    }
    return (
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandparent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Chlid Div
                    </button>
                </div>
            </div>
        </section>
    )
}
