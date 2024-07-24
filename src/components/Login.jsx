import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    let navigate = useNavigate();

    const [data, setData] = useState({
        name: "Vicky Bhat",
        username: "",
        passward: ""
    });

    function handleChange(e) {
        e.preventDefault();
        // console.log(e.target.value);
        setData({ ...data, [e.target.id]: e.target.value })
    };

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);
        if (data.username === "admin" && data.passward === "admin") {

            let loginData = JSON.stringify(data)
            localStorage.setItem("data", loginData)
            // navigate("/admin/dashboard");
            window.location.href = "/admin/dashboard"

        } else {
            alert("Invalid Credential")
        }
    };

    useEffect(() => {
        let Credential = localStorage.getItem("data");

        console.log(Credential);
        // console.log(Credential);
        if (Credential === null) {
            navigate("/")
        } else {
            navigate("/admin/dashboard");
        }
    }, []);

    return (



        <>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">

                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                The best offer <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>for your business</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form>
                                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}


                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">User name</label>
                                            <input id="username" onChange={(e) => handleChange(e)} type="text" className="form-control" />
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                            <input id="passward" onChange={(e) => handleChange(e)} type="password" className="form-control" />
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-block mb-4">
                                            Sign In
                                        </button>

                                        {/* <!-- Register buttons --> */}
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </>

        // <div className="div">
        //     <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
        //         <div className="container py-5 h-100">
        //             <div className="row d-flex justify-content-center align-items-center h-100">
        //                 <div className="col col-xl-10">
        //                     <div className="card" style={{borderRadius: "1rem"}}>
        //                         <div className="row g-0">
        //                             <div className="col-md-6 col-lg-5 d-none d-md-block">
        //                                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
        //                                     alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
        //                             </div>
        //                             <div className="col-md-6 col-lg-7 d-flex align-items-center">
        //                                 <div className="card-body p-4 p-lg-5 text-black">

        //                                     <form>

        //                                         <div className="d-flex align-items-center mb-3 pb-1">
        //                                             <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
        //                                             <span className="h1 fw-bold mb-0">Logo</span>
        //                                         </div>

        //                                         <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

        //                                         <div className="form-outline mb-4">
        //                                             <input type="email" id="form2Example17" className="form-control form-control-lg" />
        //                                             <label className="form-label" htmlFor="form2Example17">Email address</label>
        //                                         </div>

        //                                         <div className="form-outline mb-4">
        //                                             <input type="password" id="form2Example27" className="form-control form-control-lg" />
        //                                             <label className="form-label" htmlFor="form2Example27">Password</label>
        //                                         </div>

        //                                         <div className="pt-1 mb-4">
        //                                             <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
        //                                         </div>

        //                                         <a className="small text-muted" href="#!">Forgot password?</a>
        //                                         <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
        //                                             style={{color: "#393f81"}}>Register here</a></p>
        //                                         <a href="#!" className="small text-muted">Terms of use.</a>
        //                                         <a href="#!" className="small text-muted">Privacy policy</a>
        //                                     </form>

        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>

        // <div>
        //     {/* <!-- Section: Design Block --> */}
        //     <section className="">
        //         {/* <!-- Jumbotron --> */}
        //         <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
        //             <div className="container">
        //                 <div className="row gx-lg-5 align-items-center">
        //                     <div className="col-lg-6 mb-5 mb-lg-0">
        //                         <h1 className="my-5 display-3 fw-bold ls-tight">
        //                             The best offer <br />
        //                             <span className="text-primary">for your business</span>
        //                         </h1>
        //                         <p style={{color: "hsl(217, 10%, 50.8%)"}}>
        //                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                             Eveniet, itaque accusantium odio, soluta, corrupti aliquam
        //                             quibusdam tempora at cupiditate quis eum maiores libero
        //                             veritatis? Dicta facilis sint aliquid ipsum atque?
        //                         </p>
        //                     </div>

        //                     <div className="col-lg-6 mb-5 mb-lg-0">
        //                         <div className="card">
        //                             <div className="card-body py-5 px-md-5">
        //                                 <form>
        //                                     {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        //                                     <div className="row">
        //                                         <div className="col-md-6 mb-4">
        //                                             <div className="form-outline">
        //                                                 <input type="text" id="form3Example1" className="form-control" />
        //                                                 <label className="form-label" htmlFor="form3Example1">First name</label>
        //                                             </div>
        //                                         </div>
        //                                         <div className="col-md-6 mb-4">
        //                                             <div className="form-outline">
        //                                                 <input type="text" id="form3Example2" className="form-control" />
        //                                                 <label className="form-label" htmlFor="form3Example2">Last name</label>
        //                                             </div>
        //                                         </div>
        //                                     </div>

        //                                     {/* <!-- Email input --> */}
        //                                     <div className="form-outline mb-4">
        //                                         <input type="email" id="form3Example3" className="form-control" />
        //                                         <label className="form-label" htmlFor="form3Example3">Email address</label>
        //                                     </div>

        //                                     {/* <!-- Password input --> */}
        //                                     <div className="form-outline mb-4">
        //                                         <input type="password" id="form3Example4" className="form-control" />
        //                                         <label className="form-label" htmlFor="form3Example4">Password</label>
        //                                     </div>

        //                                     {/* <!-- Checkbox --> */}
        //                                     <div className="form-check d-flex justify-content-center mb-4">
        //                                         <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
        //                                         <label className="form-check-label" htmlFor="form2Example33">
        //                                             Subscribe to our newsletter
        //                                         </label>
        //                                     </div>

        //                                     {/* <!-- Submit button --> */}
        //                                     <button type="submit" className="btn btn-primary btn-block mb-4">
        //                                         Sign up
        //                                     </button>

        //                                     {/* <!-- Register buttons --> */}
        //                                     <div className="text-center">
        //                                         <p>or sign up with:</p>
        //                                         <button type="button" className="btn btn-link btn-floating mx-1">
        //                                             <i className="fab fa-facebook-f"></i>
        //                                         </button>

        //                                         <button type="button" className="btn btn-link btn-floating mx-1">
        //                                             <i className="fab fa-google"></i>
        //                                         </button>

        //                                         <button type="button" className="btn btn-link btn-floating mx-1">
        //                                             <i className="fab fa-twitter"></i>
        //                                         </button>

        //                                         <button type="button" className="btn btn-link btn-floating mx-1">
        //                                             <i className="fab fa-github"></i>
        //                                         </button>
        //                                     </div>
        //                                 </form>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* <!-- Jumbotron --> */}
        //     </section>
        //     {/* <!-- Section: Design Block --> */}
        // </div>

    )
}
