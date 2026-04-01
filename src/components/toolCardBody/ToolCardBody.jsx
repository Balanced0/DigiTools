import React, {use} from 'react';
import ToolCard from '../toolCard/ToolCard';

const ToolCardBody = ({toolsPromise}) => {
    const data = use(toolsPromise);
    return (
        <div className="container mx-auto px-4 mb-32 items-stretch gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                data.map((tool) => {
                    return <ToolCard key={tool.id} tool={tool}></ToolCard>;
                })
            }
        </div>
    );
};

export default ToolCardBody;