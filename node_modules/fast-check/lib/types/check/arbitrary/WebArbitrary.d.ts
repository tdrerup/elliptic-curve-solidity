import { Arbitrary } from './definition/Arbitrary';
/**
 * Constraints to be applied on {@link webAuthority}
 * @remarks Since 1.14.0
 * @public
 */
export interface WebAuthorityConstraints {
    /**
     * Enable IPv4 in host
     * @remarks Since 1.14.0
     */
    withIPv4?: boolean;
    /**
     * Enable IPv6 in host
     * @remarks Since 1.14.0
     */
    withIPv6?: boolean;
    /**
     * Enable extended IPv4 format
     * @remarks Since 1.17.0
     */
    withIPv4Extended?: boolean;
    /**
     * Enable user information prefix
     * @remarks Since 1.14.0
     */
    withUserInfo?: boolean;
    /**
     * Enable port suffix
     * @remarks Since 1.14.0
     */
    withPort?: boolean;
}
/**
 * For web authority
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986} - `authority = [ userinfo "@" ] host [ ":" port ]`
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webAuthority(constraints?: WebAuthorityConstraints): Arbitrary<string>;
/**
 * For internal segment of an URI (web included)
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986}
 *
 * eg.: In the url `https://github.com/dubzzz/fast-check/`, `dubzzz` and `fast-check` are segments
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webSegment(): Arbitrary<string>;
/**
 * For query parameters of an URI (web included)
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986}
 *
 * eg.: In the url `https://domain/plop/?hello=1&world=2`, `?hello=1&world=2` are query parameters
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webQueryParameters(): Arbitrary<string>;
/**
 * For fragments of an URI (web included)
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986}
 *
 * eg.: In the url `https://domain/plop?page=1#hello=1&world=2`, `?hello=1&world=2` are query parameters
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webFragments(): Arbitrary<string>;
/**
 * Constraints to be applied on {@link webUrl}
 * @remarks Since 1.14.0
 * @public
 */
export interface WebUrlConstraints {
    /**
     * Enforce specific schemes, eg.: http, https
     * @remarks Since 1.14.0
     */
    validSchemes?: string[];
    /**
     * Settings for {@link webAuthority}
     * @remarks Since 1.14.0
     */
    authoritySettings?: WebAuthorityConstraints;
    /**
     * Enable query parameters in the generated url
     * @remarks Since 1.14.0
     */
    withQueryParameters?: boolean;
    /**
     * Enable fragments in the generated url
     * @remarks Since 1.14.0
     */
    withFragments?: boolean;
}
/**
 * For web url
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986} and
 * {@link https://url.spec.whatwg.org/ | WHATWG URL Standard}
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webUrl(constraints?: WebUrlConstraints): Arbitrary<string>;
