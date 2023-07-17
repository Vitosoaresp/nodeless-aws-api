import { expect } from "chai";
import lambdaTester from "lambda-tester";
import sinon from "sinon";
import { find, headcount, turnover } from "../app/handler";
import {
  create,
  getAVGHeadcount,
  getAll,
  getTurnover,
} from "../app/model/employees";
import * as employeesMock from "./employees.mock";

const EmployeesModel = { getAll, create, getAVGHeadcount, getTurnover };

describe("getAll employees [GET]", () => {
  it("success", () => {
    const s = sinon.mock(EmployeesModel);

    s.expects("getAll").resolves(employeesMock.find);

    return lambdaTester(find)
      .event({})
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        expect(body.data).to.be.an("array");
        s.restore();
      });
  });
});

// describe("Create employeer [POST]", () => {
//   it("success", () => {
//     const s = sinon.mock(EmployeesModel);

//     s.expects("create").resolves(employeesMock.create);

//     return lambdaTester(handlerCreate)
//       .event({ body: JSON.stringify(employeesMock.create) })
//       .expectResult((result: any) => {
//         expect(result.statusCode).to.equal(200);
//         const body = JSON.parse(result.body);
//         expect(body.code).to.equal(0);
//         s.restore();
//       });
//   });

//   it("error", () => {
//     const s = sinon.mock(EmployeesModel);

//     s.expects("create").rejects(employeesMock.createError);

//     return lambdaTester(handlerCreate)
//       .event({ body: JSON.stringify({ ...employeesMock.create, nome: null }) })
//       .expectResult((result: any) => {
//         console.log(result, "handleCreate");
//         expect(result.statusCode).to.equal(400);
//         const body = JSON.parse(result.body);
//         expect(body.code).to.equal(400);
//         s.restore();
//       });
//   });
// });

describe("get headcount for employees [GET]", () => {
  it("success", () => {
    const s = sinon.mock(EmployeesModel);
    s.expects("getAVGHeadcount").resolves(employeesMock.getAVGHeadcount);

    return lambdaTester(headcount)
      .event({ pathParameters: { manager: "emailmock@gmail.com" } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        expect(body.message).to.equal("success");
        expect(body.data).to.be.an("array");
        s.restore();
      });
  });

  it("should return error when manager is not found", () => {
    const s = sinon.mock(EmployeesModel);
    s.expects("getAVGHeadcount").rejects();

    return lambdaTester(headcount)
      .event({ pathParameters: { manager: null } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(400);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(400);
        expect(body.message).to.equal("Missing manager");
        s.restore();
      });
  });
});

describe("get turnover for employees [GET]", () => {
  it("success", () => {
    const s = sinon.mock(EmployeesModel);
    s.expects("getTurnover").resolves(employeesMock.getTurnover);

    return lambdaTester(turnover)
      .event({ pathParameters: { manager: "emailmock@gmail.com" } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        expect(body.message).to.equal("success");
        expect(body.data).to.be.an("array");
        s.restore();
      });
  });

  it("should return error when manager is not found", () => {
    const s = sinon.mock(EmployeesModel);
    s.expects("getTurnover").rejects();

    return lambdaTester(turnover)
      .event({ pathParameters: { manager: null } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(400);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(400);
        expect(body.message).to.equal("Missing manager");
        s.restore();
      });
  });
});
