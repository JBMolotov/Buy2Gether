import { AppDataSource } from "./data-source"
import { Vendedor } from "./entity/Vendedor"
import { Grupo } from "./entity/Grupo"
import { Cliente } from "./entity/Cliente"
import { SuperAdmin } from "./entity/SuperAdmin"
import { Oferta } from "./entity/Oferta"
import { Historico } from "./entity/Historico"

AppDataSource.initialize().then(async () => {

    /*
    // vendedor teste
    const vendedor = new Vendedor()
    vendedor.CPF_CNPJ = 1234
    vendedor.nome = "teste brinquedos"
    vendedor.email = "teste@teste.br"
    vendedor.senha = "123"
    vendedor.endereco = "rua sao carlos 400"
    vendedor.ramo = "brinquedo"

    const vendedorRepository = AppDataSource.getRepository(Vendedor)

    console.log("Saving vendedor: ", vendedor)
    await vendedorRepository.save(vendedor)
    console.log("Vendedor saved")

    const savedVendedores = await vendedorRepository.find()
    console.log("Loaded vendedores: ", savedVendedores)

    console.log()

    // grupo teste
    const grupo1 = new Grupo()
    grupo1.nome = "teste boneca"
    grupo1.vendedor = vendedor

    const grupoRepository = AppDataSource.getRepository(Grupo)

    console.log("Saving grupo: ", grupo1)
    await grupoRepository.save(grupo1)
    console.log("Grupo saved")
    
    const grupo2 = new Grupo()
    grupo2.nome = "teste carro"
    grupo2.vendedor = vendedor

    console.log("Saving grupo: ", grupo2)
    await grupoRepository.save(grupo2)
    console.log("Grupo saved")

    const savedGrupos = await grupoRepository.find()
    console.log("Loaded grupos: ", savedGrupos)

    console.log()

    // teste cliente
    const clienteRepository = AppDataSource.getRepository(Cliente)
    const savedClientes = await clienteRepository.find()

    const cliente = new Cliente()
    cliente.CPF = 4321
    cliente.nome = "Rafael"
    cliente.email = "rafael@rafael.br"
    cliente.senha = "123"
    cliente.endereco = "rua carlos sao 300"
    cliente.celular = 123456789

    console.log("Saving cliente")
    await clienteRepository.save(cliente)
    console.log("Cliente saved")

    console.log("Loaded clientes: ", savedClientes)

    console.log()

    // teste oferta
    const oferta = new Oferta()

    oferta.nome = "2 bonecas"
    oferta.preco = 20
    oferta.descricao = "2 bonecas barbie"
    oferta.quantidade_minima = 5
    oferta.grupo = grupo1

    const ofertaRepository = AppDataSource.getRepository(Oferta)

    console.log("Saving oferta: ", oferta)
    await ofertaRepository.save(oferta)
    console.log("Oferta saved")

    const savedOfertas = await ofertaRepository.find()
    console.log(savedOfertas)

    console.log()

    // teste historico
    const historico = new Historico()
    historico.data = "15/10/2023"
    historico.horario = "19:30"
    historico.cliente = cliente
    historico.oferta = oferta

    const historicoRepository = AppDataSource.getRepository(Historico)

    console.log("Saving historico: ", historico)
    await historicoRepository.save(historico)
    console.log("Saved historico")

    const savedHistoricos = await historicoRepository.find()
    console.log("Saved historicos: ", savedHistoricos)

    console.log()

    // teste super admin
    const superAdmin = new SuperAdmin()
    superAdmin.nome = "admin"
    superAdmin.email = "admin@admin.br"
    superAdmin.senha = "123"

    const superAdminRepository = AppDataSource.getRepository(SuperAdmin)

    console.log("Saving super admin: ", superAdmin)
    await superAdminRepository.save(superAdmin)
    console.log("Super admin saved")

    const savedSuperAdmins = await superAdminRepository.find()
    console.log("Loaded super admins: ", savedSuperAdmins)

    console.log()
    */

}).catch(error => console.log(error))
