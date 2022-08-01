import React from 'react';

const Blogs = () => {
    return (
        <div className='px-10 md:px-20 text-left pt-36 pb-20 h-full'>
            <h2 className='font-serif text-2xl'>Q1: What is differences between Javascript and Node js ?</h2>
            <p className='font-sans text-xl mb-10'>Ans:
                <ul>
                    <h2 className='text-xl mb-5 font-serif'>JavaScript :</h2>
                    <li>1. It's a Scripting Language</li>
                    <li>2. It's use for Client Side </li>
                    <li>3. It's update version of Ecma Script that uses Chrome's V8 engine written in C++. </li>
                    <li>4. JavaScript framework : RamdaJs, TypedJs,VueJs etc </li>
                    <li>5. It can only run in browser </li>
                </ul>
                <ul>
                    <h2 className='text-xl my-5 font-serif'>Node Js :</h2>
                    <li>1. It's runtime environment of javascript</li>
                    <li>2. It's generally use for Server Side </li>
                    <li>3. Node js has some modules that's most use for development. </li>
                    <li>4. Node js modules : Lodash, express etc </li>
                    <li>5. It can allow run js code outside of browser </li>
                </ul>
            </p>
            <h2 className='font-serif text-2xl'>Q2: What is  differences between "SQL" and "NOSQL" databases. ?</h2>
            <p className='font-sans text-xl mb-10'>Ans:
                <ul>
                    <h2 className='text-xl mb-5 font-serif'>SQL :</h2>
                    <li>1. It is vertically scalable</li>
                    <li>2. It's table based database </li>
                    <li>3. It's fixed or static database </li>
                    <li>4. This is best for complex queries </li>
                    <li>5. Some sql database are mysql, InterBase etc </li>
                </ul>
                <ul>
                    <h2 className='text-xl my-5 font-serif'>NOSQL :</h2>
                    <li>1. It is horizontally scalable</li>
                    <li>2. It's document based database </li>
                    <li>3. It's dynamic database </li>
                    <li>4. This is not so good for complex queries </li>
                    <li>5. Some sql database are MongoDB,Redis,Couch DB etc</li>
                </ul>
            </p>
            <h2 className='font-serif text-2xl'>Q3: What is the purpose of jwt and how does it work ?</h2>
            <p className='font-sans text-xl mb-10'>Ans:
                <h2 className='text-xl mb-5 font-serif'>JWT :</h2>
                <p>JWT or JSON Wen Token is use for secure data in server and client side. Only valid user can access secure data.</p>
                <p>When login in client , a token create from server and  the token is store any place in browser like localStorage or cookie.
                    Then client send a request in server for authorization.
                    Then server  verify this token that is valid or invalid.
                    If token is valid, giving access to verify page</p>
            </p>
        </div>
    );
};

export default Blogs;