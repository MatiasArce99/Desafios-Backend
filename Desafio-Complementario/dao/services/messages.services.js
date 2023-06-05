import { messageModel } from "../models/messages.model.js";

class MessagesServices {

    constructor(){

        this.model = messageModel;

    }

    async getAllMessages(){

        return this.model.find().lean();

    }

    async addMessage(message){

        return await this.model.create(message);

    }
}

export const messagesService = new MessagesServices();