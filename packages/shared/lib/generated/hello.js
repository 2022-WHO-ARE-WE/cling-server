"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HELLO_SERVICE_NAME = exports.HelloServiceControllerMethods = exports.HELLO_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "hello";
exports.HELLO_PACKAGE_NAME = "hello";
function HelloServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getHello"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("HelloService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("HelloService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.HelloServiceControllerMethods = HelloServiceControllerMethods;
exports.HELLO_SERVICE_NAME = "HelloService";
//# sourceMappingURL=hello.js.map