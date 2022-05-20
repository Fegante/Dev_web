import {paths as eventosPaths} from '@routes/evento-router';
import { StatusCodes } from 'http-status-codes';
import supertest, { SuperTest, Test, Response } from 'supertest';
import app from '@server';
import { Evento } from '@models/evento-model';
import eventoRepo from '@repos/evento-repo';
import { pErr } from '@shared/functions';
import { Localidade } from '@models/commons/localidade-model';

type TReqBody = string | object | undefined;


describe('evento-router', () => {
    const eventosPath = 'api/eventos';
    const addEventosPath = `${eventosPath}${eventosPaths.add}`;

    const {BAD_REQUEST, CREATED, OK} = StatusCodes;

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });


    describe(`"POST:${addEventosPath}"`, () => {
        const callApi = (reqBody: TReqBody) => {
            return agent.post(addEventosPath).type('form').send(reqBody);
        };
        const evento = new Evento();
        evento.nome = '2022 - DOO';
        evento.localidade = new Localidade();
        evento.totalInvestido = 100;
        evento.totalReceita = 0;
        evento.dataHoraInicio = new Date();
        evento.dataHoraFim = new Date();
        

        const eventoData = {
            evento: evento
        };

        it(`Deve retornar um StatusCode ${CREATED}`, 
        (done) => {
            spyOn(eventoRepo, 'add').and.returnValue(Promise.resolve());
            agent.post(addEventosPath).type('form').send(eventoData)
            .end((err: Error, res: Response) => {
                pErr();
                expect(res.status).toBe(CREATED);
                expect(res.body.error).toBeUndefined();
                done();
            });

        });
    });

});