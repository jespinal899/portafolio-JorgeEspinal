import type { Certification } from '@/core/entities'
import { GetCertificationsUseCase } from '../get-certifications.use-case'
import { buildRepositoryMock } from './portfolio-repository.mock'

const buildCertification = (overrides: Partial<Certification> = {}): Certification => ({
  id: 'certification-1',
  name: 'Certificado',
  ...overrides,
})

describe('GetCertificationsUseCase', () => {
  it('orders dated certifications from newest to oldest and leaves undated ones last', async () => {
    // Arrange
    const undated = buildCertification({ id: 'undated' })
    const older = buildCertification({ id: 'older', issueDate: '2023-05-01' })
    const newer = buildCertification({ id: 'newer', issueDate: '2025-02-01' })
    const useCase = new GetCertificationsUseCase(
      buildRepositoryMock({ getCertifications: vi.fn().mockResolvedValue([undated, older, newer]) }),
    )

    // Act
    const result = await useCase.execute('es')

    // Assert
    expect(result.map((certification) => certification.id)).toEqual(['newer', 'older', 'undated'])
  })
})
