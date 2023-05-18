
const Blog = () => {
    return (
        <div className=" w-1/2 mx-auto">
           <div className=" mb-10">
            <h2 className="mb-2"><span className=" text-red-600">Question:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className="mb-2"><span className=" text-sky-600">Answer:</span> <br />
                Access token: Access tokens are used in token-based authentication to allow an application to access an API.
                <br />
                refresh token: 
                <br />
                Refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.
                <br />
                <br />

                <span>Access token:</span> 
                <br />
                Access tokens Store local browser storage. Do not store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.

                <br />
                <br />
                <span>Refresh token:</span>
                <br />
                 Refresh token rotation provides applications and platforms with better security measures by decreasing their lifetime. This lowers the chance that a hacker can access a valid token, particularly for single-page applications (SPAs) and browser-based applications. 
                </p>
           </div>
           <div className=" mb-10">
            <h2 className="mb-2"><span className=" text-red-600">Question:</span> Compare SQL and NoSQL databases?</h2>
            <p className="mb-2"><span className=" text-sky-600">Answer:</span>
            <br />
            <span>SQL:</span>
            <br />
                SQL databases are primarily called RDBMS or Relational Databases.
                <br />
                SQL databases are table based databases.
                <br />
                SQL databases have a predefined schema
                <br />
                SQL databases are vertically scalable
                <br />
                SQL databases are not suitable for hierarchical data storage.
                <br />
                One type with minor variations.
            </p>
            <p><span>NoSQL:</span>
            <br />
                NoSQL databases are primarily called as Non-relational or distributed database.
                <br />
                NoSQL databases can be document based, key-value pairs, graph databases.
                <br />
                NoSQL databases use dynamic schema for unstructured data.
                <br />
                NoSQL databases are horizontally scalable
                <br />
                More suitable for the hierarchical data store as it supports key-value pair method.
                <br />
                Many different types which include key-value stores, document databases, and graph databases.
            </p>
           </div>

           <div className=" mb-10">
            <h2 className="mb-2"><span className=" text-red-600">Question:</span> What is express js? What is Nest JS?</h2>
            <p className="mb-2"><span className=" text-sky-600">Answer:</span> <br />
                <span>Express js:</span> Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
                <br />
                <span>Nest JS:</span> Nest.JS is a framework that helps build Node.JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications. 
                </p>
           </div>

           <div className=" mb-10">
            <h2 className="mb-2"><span className=" text-red-600">Question:</span> What is MongoDB aggregate and how does it work?</h2>
            <p className="mb-2"><span className=" text-sky-600">Answer:</span> <br />
                <span>MongoDB aggregate:</span> MongoDB aggregates make it easier to query data from any collection. It involves things like matching, getting data from other collections, selecting fields, and much more.
                <br />
                <span>how to work:</span> There is no better method than MongoDB Aggregations when we need to collect the metrics from MongoDB for any graphical illustration or maybe other operations. Aggregation in MongoDB is responsible for processing the data, which results in the calculated outputs, generally by assembling the data from several documents and then executes in various ways on those assembled data in order to yield one collective result. 
                </p>
           </div>

        </div>
    )
    
};

export default Blog;