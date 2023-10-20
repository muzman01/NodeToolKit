// emailValidator.test.ts
import { EmailValidator } from "../../helpers/validation"; // Lütfen gerçek yolu buraya yazın.

import dns from "dns";
import { promisify } from "util";

// dns.resolveMx fonksiyonunu mocklayın
jest.mock("dns", () => ({
  ...jest.requireActual("dns"), // gerçek dns işlevlerini koru
  resolveMx: jest.fn(), // sadece resolveMx'ı mockla
}));

describe("EmailValidator", () => {
  let emailValidator: EmailValidator;

  beforeAll(() => {
    emailValidator = new EmailValidator();
  });

  beforeEach(() => {
    // Her testten önce mock'ların çağrı geçmişini temizle
    jest.clearAllMocks();
  });

  // Geçerli bir e-posta adresi için pozitif test senaryosu
  it("should validate a correct email address", async () => {
    const validEmail = "test@genuine.com";
    (dns.resolveMx as unknown as jest.Mock).mockImplementation(() =>
      Promise.resolve([{ exchange: "mx.genuine.com" }])
    );

    const result: any = await emailValidator.validate(validEmail);

    expect(result.isValid).toBe(true);
  });

  // MX kaydı olmayan bir domain için negatif test senaryosu
  it("should invalidate an email with a domain that has no MX record", async () => {
    const noMxRecordEmail = "test@nomx.com";
    (dns.resolveMx as unknown as jest.Mock).mockImplementation(() => {
      throw new Error("No MX record");
    });

    const result: any = await emailValidator.validate(noMxRecordEmail);

    expect(result.isValid).toBe(false);
    expect(result.reason).toBe("No MX records");
  });

  // Kara listeye alınmış bir domain için negatif test senaryosu
  it("should invalidate an email from a blacklisted domain", async () => {
    const blacklistedEmail = "test@spam.com";
    // resolveMx'in gerçek bir cevap döndürdüğünü varsayalım, ancak domain kara listeye alınmış
    (dns.resolveMx as unknown as jest.Mock).mockImplementation(() =>
      Promise.resolve([{ exchange: "mx.spam.com" }])
    );

    const result: any = await emailValidator.validate(blacklistedEmail);

    expect(result.isValid).toBe(false);
    expect(result.reason).toBe("Domain is blacklisted");
  });

  // Diğer test senaryolarınızı buraya ekleyin, örneğin geçersiz formatlar, tekrarlayan karakterler vs. için testler.
});
