import React from 'react';

const BlogCard : React.FC = () => {
    return (
        <>
            <div className="col-span-2 bg-white py-6 px-6 rounded-2xl dark:bg-gray-800">
                <div className="text-center md:text-left">
                    <h6 className="text-2xl mb-3 text-gray-50000 font-bold dark:text-gray-200">@devmamunur</h6>
                    <h6 className="text-1xl mb-1 text-gray-100 dark:text-gray-200">Want To Know More</h6>
                    <h6 className="text-2xl text-gray-100 font-bold uppercase dark:text-gray-200">Article</h6>
                </div>
            </div>
        </>
    );
};

export default BlogCard;