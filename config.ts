interface Config {
    aws: {
        region: string;
    };
    auth: {
        userPoolId: string;
        userPoolWebClientId: string;
        scope: string[];
        userPoolDomain: string;
        domain: string;
    };
    s3: {
        identityPoolId: string;
    };
}

const config: Config = {
    aws: {
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
    },
    auth: {
        userPoolId: 'us-east-1_AVvdt4Paw',
        userPoolWebClientId: '6s6ll9sog58jjqe3167oaivl1r',
        scope: ["email", "phone_number", "profile", "openid"],
        userPoolDomain: "https://techtiz.auth.us-east-1.amazoncognito.com",
        domain: 'https://techtiz.auth.us-east-1.amazoncognito.com',
    },
    s3: {
        identityPoolId: 'us-east-1:0ef25f89-357b-4d5e-8b40-d914251a834b', //REQUIRED - Amazon Cognito Identity Pool ID
    },
};

export default config;