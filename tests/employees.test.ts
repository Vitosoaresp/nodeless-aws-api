import { expect } from "chai";
import lambdaTester from "lambda-tester";
import sinon from "sinon";
import { create, find } from "../app/handler";
import { getAll } from "../app/model/employees";
import * as employeesMock from "./employees.mock";

const EmployeesModel = { getAll, create };

describe("getAll [GET]", () => {
  it("success", () => {
    const s = sinon.mock(EmployeesModel);

    s.expects("getAll").resolves(employeesMock.find);

    return lambdaTester(find)
      .event({})
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        s.restore();
      });
  });
});

describe("Create [POST]", () => {
  it("success", () => {
    const s = sinon.mock(EmployeesModel);

    s.expects("create").resolves(employeesMock.create);

    return lambdaTester(create)
      .event({ body: JSON.stringify(employeesMock.create) })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        s.restore();
      });
  });

  it("error", () => {
    const s = sinon.mock(EmployeesModel);

    s.expects("create").rejects(employeesMock.createError);

    return lambdaTester(create)
      .event({ body: JSON.stringify({ ...employeesMock.create, nome: null }) })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        s.restore();
      });
  });
});
