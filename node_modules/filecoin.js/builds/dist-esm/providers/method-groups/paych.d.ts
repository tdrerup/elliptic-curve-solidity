import { Connector } from '../../connectors/Connector';
import { Address, ChannelAvailableFunds, ChannelInfo, Cid, PaychStatus, PaymentInfo, SignedVoucher, VoucherCreateResult, VoucherSpec } from '../Types';
/**
 * The Paych methods are for interacting with and managing payment channels
 */
export declare class JsonRpcPaychMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * PaychGet
     * @param from
     * @param to
     * @param amount
     */
    getPaymentChannel(from: string, to: string, amount: string): Promise<ChannelInfo>;
    /**
     * PaychGetWaitReady
     * @param cid
     */
    getWaitReadyPaymentChannel(cid: Cid): Promise<Address>;
    /**
     * PaychList
     */
    getList(): Promise<[Address]>;
    /**
     * PaychStatus
     * @param address
     */
    status(address: string): Promise<PaychStatus>;
    /**
     * PaychAllocateLane
     * @param address
     */
    allocateLane(address: string): Promise<number>;
    /**
     * PaychSettle
     * @param address
     */
    settle(address: string): Promise<Cid>;
    /**
     * PaychCollect
     * @param address
     */
    collect(address: string): Promise<Cid>;
    /**
     * PaychAvailableFunds
     * @param address
     */
    getAvailableFunds(address: string): Promise<ChannelAvailableFunds>;
    /**
     * PaychAvailableFundsByFromTo
     * @param from
     * @param to
     */
    getAvailableFundsByFromTo(from: string, to: string): Promise<ChannelAvailableFunds>;
    /**
     * PaychNewPayment
     * @param from
     * @param to
     * @param vouchers
     */
    newPayment(from: string, to: string, vouchers: [VoucherSpec]): Promise<PaymentInfo>;
    /**
     * PaychVoucherCreate
     * @param address
     * @param amount
     * @param lane
     */
    voucherCreate(address: string, amount: string, lane: number): Promise<VoucherCreateResult>;
    /**
     * PaychVoucherList
     * @param address
     */
    voucherList(address: string): Promise<[SignedVoucher]>;
    /**
     * PaychVoucherCheckValid
     * @param address
     * @param signedVoucher
     */
    voucherCheckValid(address: string, signedVoucher: SignedVoucher): Promise<any>;
    /**
     * PaychVoucherAdd
     * @param address
     * @param signedVoucher
     * @param proof
     * @param minDelta
     */
    voucherAdd(address: string, signedVoucher: SignedVoucher, proof: any, minDelta: string): Promise<string>;
    /**
     * PaychVoucherCheckSpendable
     * @param address
     * @param signedVoucher
     * @param secret
     * @param proof
     */
    voucherCheckSpendable(address: string, signedVoucher: SignedVoucher, secret: any, proof: any): Promise<boolean>;
    /**
     * PaychVoucherSubmit
     * @param address
     * @param signedVoucher
     * @param secret
     * @param proof
     */
    voucherSubmit(address: string, signedVoucher: SignedVoucher, secret: any, proof: any): Promise<Cid>;
}
//# sourceMappingURL=paych.d.ts.map