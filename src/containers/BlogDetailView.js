import React from 'react';
import axios from 'axios';

class BlogDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        let pk = this.props.match.params.id;

        axios.get('/cms/pages/' + pk + '/')
            .then(res => {
                const blog = res.data;
                this.setState({ blog, loaded: true});
            });
    }

    render() {
        if (this.state.loaded) {
            const blog = this.state.blog;

            return (
                <div className="col-md-8">
                    <h1>{blog.title}</h1>
                    <hr/>
                    <div dangerouslySetInnerHTML={{ __html: blog.body }} />
                </div>
            );
        } else {
            return (
                <div class="col-md-8">
                    Loading...
                </div>
            );
        }
    }

}

export {BlogDetail};
