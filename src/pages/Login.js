import React from 'react';
import Header from "../components/Header";
import Login from "../components/Login";
import MenuBar from "../components/NavBar";


export default function LoginPage() {
    return (
        <>
           <div className="min-h-screen flex flex-col">
          
            <div className="container mx-auto mt-10">
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                <Login />
            </div>
            </div>
        </>
    );
}
