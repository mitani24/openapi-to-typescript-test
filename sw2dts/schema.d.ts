export interface Address {
    /**
     * example:
     * 437 Lytton
     */
    street?: string;
    /**
     * example:
     * Palo Alto
     */
    city?: string;
    /**
     * example:
     * CA
     */
    state?: string;
    /**
     * example:
     * 94301
     */
    zip?: string;
}
export interface ApiResponse {
    code?: number; // int32
    type?: string;
    message?: string;
}
export interface Category {
    /**
     * example:
     * 1
     */
    id?: number; // int64
    /**
     * example:
     * Dogs
     */
    name?: string;
}
export interface Customer {
    /**
     * example:
     * 100000
     */
    id?: number; // int64
    /**
     * example:
     * fehguy
     */
    username?: string;
    address?: Address[];
}
export interface Order {
    /**
     * example:
     * 10
     */
    id?: number; // int64
    /**
     * example:
     * 198772
     */
    petId?: number; // int64
    /**
     * example:
     * 7
     */
    quantity?: number; // int32
    shipDate?: string; // date-time
    /**
     * Order Status
     * example:
     * approved
     */
    status?: "placed" | "approved" | "delivered";
    complete?: boolean;
}
export interface Pet {
    /**
     * example:
     * 10
     */
    id?: number; // int64
    /**
     * example:
     * doggie
     */
    name: string;
    category?: Category;
    photoUrls: string[];
    tags?: Tag[];
    /**
     * pet status in the store
     */
    status?: "available" | "pending" | "sold";
}
export interface Tag {
    id?: number; // int64
    name?: string;
}
export interface User {
    /**
     * example:
     * 10
     */
    id?: number; // int64
    /**
     * example:
     * theUser
     */
    username?: string;
    /**
     * example:
     * John
     */
    firstName?: string;
    /**
     * example:
     * James
     */
    lastName?: string;
    /**
     * example:
     * john@email.com
     */
    email?: string;
    /**
     * example:
     * 12345
     */
    password?: string;
    /**
     * example:
     * 12345
     */
    phone?: string;
    /**
     * User Status
     * example:
     * 1
     */
    userStatus?: number; // int32
}
