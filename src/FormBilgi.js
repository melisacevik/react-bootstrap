function FormBilgi(props){

    return(

        <div className="row my-5">
            <div className="col-4" id="sag">
                <div className="row" style="border: 1px solid red; border-radius: 30px; border-block-color: pink; background-color: lavenderblush; width: 950px; height: 85px;">
                    <div className="col-6">
                        <p>{props.userTitle} </p>
                    </div>
                    <div className="col-6">
                        <p> {props.infoValue} </p>
                    </div>
                </div>
            </div>
        </div>


    );

}
export default FormBilgi;