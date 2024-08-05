// ESM
import fetchMock from "fetch-mock";

fetchMock.mock("http://example.com", 200);
fetchMock.sandbox();
