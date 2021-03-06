var apigClientFactory = {};
apigClientFactory.newClient = function(e) {
    var a = {};
    void 0 === e && (e = {
        accessKey: "",
        secretKey: "",
        sessionToken: "",
        region: "",
        apiKey: void 0,
        defaultContentType: "application/json",
        defaultAcceptType: "application/json"
    }), void 0 === e.accessKey && (e.accessKey = ""), void 0 === e.secretKey && (e.secretKey = ""), void 0 === e.apiKey && (e.apiKey = ""), void 0 === e.sessionToken && (e.sessionToken = ""), void 0 === e.region && (e.region = "eu-west-1"), void 0 === e.defaultContentType && (e.defaultContentType = "application/json"), void 0 === e.defaultAcceptType && (e.defaultAcceptType = "application/json");
    var t = "https://api.deeparteffects.com/v1",
        r = /(^https?:\/\/[^\/]+)/g.exec(t)[1],
        s = t.substring(r.length),
        o = {
            accessKey: e.accessKey,
            secretKey: e.secretKey,
            sessionToken: e.sessionToken,
            serviceName: "execute-api",
            region: e.region,
            endpoint: r,
            defaultContentType: e.defaultContentType,
            defaultAcceptType: e.defaultAcceptType
        },
        i = "NONE";
    void 0 !== o.accessKey && "" !== o.accessKey && void 0 !== o.secretKey && "" !== o.secretKey && (i = "AWS_IAM");
    var p = {
            endpoint: r,
            defaultContentType: e.defaultContentType,
            defaultAcceptType: e.defaultAcceptType
        },
        c = apiGateway.core.apiGatewayClientFactory.newClient(p, o);
    return a.resultGet = function(a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, ["submissionId"], ["body"]);
        var o = {
            verb: "get".toUpperCase(),
            path: s + uritemplate("/result").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
            headers: apiGateway.core.utils.parseParametersToObject(a, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(a, ["submissionId"]),
            body: t
        };
        return c.makeRequest(o, i, r, e.apiKey)
    }, a.resultOptions = function(a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
            verb: "options".toUpperCase(),
            path: s + uritemplate("/result").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
            headers: apiGateway.core.utils.parseParametersToObject(a, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
            body: t
        };
        return c.makeRequest(o, i, r, e.apiKey)
    }, a.stylesGet = function(a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
            verb: "get".toUpperCase(),
            path: s + uritemplate("/styles").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
            headers: apiGateway.core.utils.parseParametersToObject(a, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
            body: t
        };
        return c.makeRequest(o, i, r, e.apiKey)
    }, a.stylesOptions = function(a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
            verb: "options".toUpperCase(),
            path: s + uritemplate("/styles").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
            headers: apiGateway.core.utils.parseParametersToObject(a, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
            body: t
        };
        return c.makeRequest(o, i, r, e.apiKey)
    }, a.uploadPost = function(a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, ["body"], ["body"]);
        var o = {
            verb: "post".toUpperCase(),
            path: s + uritemplate("/upload").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
            headers: apiGateway.core.utils.parseParametersToObject(a, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
            body: t
        };
        return c.makeRequest(o, i, r, e.apiKey)
    }, a.uploadOptions = function(a, t, r) {
        void 0 === r && (r = {}), apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
        var o = {
            verb: "options".toUpperCase(),
            path: s + uritemplate("/upload").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
            headers: apiGateway.core.utils.parseParametersToObject(a, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
            body: t
        };
        return c.makeRequest(o, i, r, e.apiKey)
    }, a
};
