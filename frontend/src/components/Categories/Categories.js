import React from 'react';

const categories = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                            <tr>
                                <h3 className={"text-center"}>Categories</h3>
                            </tr>
                        </thead>
                        <tbody>
                            {props.categories.map((term) => <tr><td className={"text-center"}>{term}</td></tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories