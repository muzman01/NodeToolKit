import dns from "dns";
import { promisify } from "util";

const resolveMx = promisify(dns.resolveMx);

interface ValidationResult {
  isValid: boolean;
  reason?: string;
}

export class EmailValidator {
  // Kara listeye alınmış domainlerin veya kelimelerin listesi.
  private static blacklist: string[] = ["example.com", "spam.com"]; // Örnek olarak belirli domainler ekleyin.

  public async validate(email: string): Promise<ValidationResult> {
    // Format kontrolü.
    if (!EmailValidator.checkFormat(email)) {
      return { isValid: false, reason: "Invalid format" };
    }

    // Kara liste kontrolü.
    if (EmailValidator.isBlacklisted(email)) {
      return { isValid: false, reason: "Domain is blacklisted" };
    }

    // Tekrarlayan karakter kontrolü.
    if (EmailValidator.hasConsecutiveCharacters(email)) {
      return {
        isValid: false,
        reason: "Email contains consecutive repeating characters",
      };
    }

    // Domain DNS kontrolü.
    const domain = email.split("@")[1];
    try {
      const addresses = await resolveMx(domain);
      if (addresses.length === 0) {
        return { isValid: false, reason: "No MX records" };
      }
    } catch (error) {
      return { isValid: false, reason: "Domain not found" };
    }

    return { isValid: true };
  }

  private static checkFormat(email: string): boolean {
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return regex.test(email.toLowerCase());
  }

  private static isBlacklisted(email: string): boolean {
    const domain = email.split("@")[1];
    return this.blacklist.includes(domain.toLowerCase());
  }

  private static hasConsecutiveCharacters(email: string): boolean {
    // Tekrarlayan karakterlerin olup olmadığını kontrol etmek için bir regex kullanıyoruz.
    const regex = /(.)\4/; // Aynı karakterin tekrarladığını tespit eder.
    return regex.test(email);
  }
}
